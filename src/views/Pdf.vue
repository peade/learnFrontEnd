<template>
  <div>
    <canvas
      v-for="page in pages"
      :id="'pageCanvas' + page"
      :key="page"
    ></canvas>
    <div id="pdf" class="pdf" v-show="isUserPdfObject"></div>
  </div>
</template>
<script>
import PdfObject from 'pdfobject'
import PdfjsLib from 'pdfjs-dist'
import demoPdf from '@/assets/pdf/demo.pdf'
PdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry')
export default {
  name: 'PDF',
  filters: {},
  components: {},
  mixins: [],
  data() {
    return {
      isUserPdfObject: false,
      pages: [],
      pdfDoc: null
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.usePdfjs()
  },
  destroyed() {},
  methods: {
    usePdfObject() {
      // 移动端不支持embed方式显示pdf
      this.isUserPdfObject = true
      PdfObject.embed(demoPdf, '#pdf')
    },
    usePdfjs() {
      PdfjsLib.getDocument(demoPdf).promise.then(
        pdf => {
          this.pdfDoc = pdf
          this.pages = pdf.numPages
          this.$nextTick(() => {
            this.renderPdfPage(1)
          })
        },
        e => {
          console.log(e)
        }
      )
    },
    renderPdfPage(num) {
      this.pdfDoc.getPage(num).then(page => {
        let canvas = document.getElementById('pageCanvas' + num)
        let ctx = canvas.getContext('2d')
        let dpr = window.devicePixelRatio || 1
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1
        let ratio = dpr / bsr
        let viewport = page.getViewport({
          scale: 1
        })
        canvas.width = viewport.width * ratio
        canvas.height = viewport.height * ratio
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (this.pages > num) {
          this.renderPdfPage(num + 1)
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.pdf {
  width: 100vw;
  max-width: 750px;
  height: 100vh;
}
canvas {
  width: 100%;
}
</style>

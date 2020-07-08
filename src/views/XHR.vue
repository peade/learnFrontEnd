<template>
  <div></div>
</template>
<script>
export default {
  name: 'XHR',
  filters: {},
  components: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    xhrDemo() {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', '/article/xmlhttprequest/example/load')
      // 设置Headder方法
      xhr.setRequestHeader('X-Auth', '456')
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
      // 设置response
      xhr.responseType = 'json' // '' text arraybuffer blob document json
      xhr.send()
      // xhr.open('POST', '/article/xmlhttprequest/post/user')
      // xhr.send(formData)

      xhr.onload = function() {
        if (xhr.status !== 200) {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`)
        } else {
          console.log(`Done, got ${xhr.response.length} bytes`)
          console.log(xhr.response)
        }
      }
      xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          consoel.log(`Received ${event.loaded} of ${event.total} bytes`)
        } else {
          console.log(`Received ${event.loaded} bytes`) // 没有 Content-Length
        }
      }
      /**
       * UNSENT = 0; // 初始状态
       * OPENED = 1; // open 被调用
       * HEADERS_RECEIVED = 2; // 接收到 response header
       * LOADING = 3; // 响应正在被加载（接收到一个数据包）
       * DONE = 4; // 请求完成
       */
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 3) {
          // 加载中
        }
        if (xhr.readyState == 4) {
          // 请求完成
        }
      }
      xhr.onerror = function() {
        console.log('Request failed')
      }
      // 上传进度
      xhr.upload.onprogress = function(event) {
        console.log(`Uploaded ${event.loaded} of ${event.total} bytes`)
      }
      xhr.upload.onload = function() {
        console.log(`Upload finished successfully.`)
      }
      xhr.upload.onerror = function() {
        console.log(`Error during the upload: ${xhr.status}`)
      }
    }
  }
}
</script>
<style scoped></style>

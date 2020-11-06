<template>
  <div>
    <van-field v-model="name" clearable></van-field>
    <van-button @click="check">validate</van-button>
  </div>
</template>
<script>
import {
  HalfFullWidithCharactor,
  StrCharLen,
  CharLenValidate,
  CnNameValidate,
  CheckNameType,
  EnNameValidate
} from '@/utils/name-validate'
export default {
  name: 'InsuValidate',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      name: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    check() {
      console.log(this.name)
      const newStr = HalfFullWidithCharactor.ToCDB(this.name).trim()
      const charLen = StrCharLen(newStr)
      const isInLen = CharLenValidate(newStr, { min: 0, max: 60 })
      const nameType = CheckNameType(newStr)
      const isCnName = CnNameValidate(newStr)
      const isEnName = EnNameValidate(newStr)
      console.log({
        name: this.name,
        newStr,
        charLen,
        isInLen,
        isCnName,
        nameType,
        isEnName
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>

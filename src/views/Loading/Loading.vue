<template>
  <div>
    <type-one />
    <type-two />
    <type-three />
    <type-four />
    <type-five />
    <type-six />
    <type-seven />
  </div>
</template>
<script>
import TypeOne from './TypeOne'
import TypeTwo from './TypeTwo'
import TypeThree from './TypeThree'
import TypeFour from './TypeFour'
import TypeFive from './TypeFive'
import TypeSix from './TypeSix'
import TypeSeven from './TypeSeven'
export default {
  name: 'Loading',
  filters: {},
  components: {
    TypeOne,
    TypeTwo,
    TypeThree,
    TypeFour,
    TypeFive,
    TypeSix,
    TypeSeven
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>

<template>
  <div>
    <ul>
      <li>
        <label @click="all">
          <input type="checkbox" value="all" v-model="selAll" />全选
        </label>
      </li>
      <li v-for="item in list" :key="item">
        <label @click="logData">
          <input type="checkbox" :value="item" v-model="selectData" />{{ item }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  filters: {},
  components: {},
  mixins: [],
  props: {
    list: {
      type: Array,
      default: function() {
        return [1, 2, 3, 4, 5]
      }
    }
  },
  data() {
    return {
      selAll: [],
      selectData: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    all() {
      setTimeout(() => {
        console.log(this.selAll)
        if (this.selAll.length === 1) {
          this.selectData = [...this.list]
        } else {
          this.selectData = []
        }
      }, 0)
    },
    logData() {
      setTimeout(() => {
        if (this.selectData.length === this.list.length) {
          this.selAll = ['all']
        } else {
          this.selAll = []
        }
      }, 0)
    }
  }
}
</script>
<style scoped lang="scss"></style>

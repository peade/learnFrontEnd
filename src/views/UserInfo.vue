<template>
  <div>
    <h4 class="h">用户信息表格</h4>
    <table>
      <thead>
        <tr>
          <th class="date">
            <span>
              日期
            </span>
            <div class="asc-desc">
              <span @click="sort('date', 'asc')">升</span>
              <span @click="sort('date', 'desc')">降</span>
            </div>
          </th>
          <th>
            <span>姓名</span>
            <div class="asc-desc">
              <span @click="sort('name', 'asc')">升</span>
              <span @click="sort('name', 'desc')">降</span>
            </div>
          </th>
          <th>
            年龄
            <div class="asc-desc">
              <span @click="sort('age', 'asc')">升</span>
              <span @click="sort('age', 'desc')">降</span>
            </div>
          </th>
          <th>
            城市
            <div class="asc-desc">
              <span @click="sort('city', 'asc')">升</span>
              <span @click="sort('city', 'desc')">降</span>
            </div>
          </th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in dataList" :key="info.key">
          <td>
            {{ info.date }}
          </td>
          <td>
            {{ info.name }}
          </td>
          <td>
            {{ info.age }}
          </td>
          <td>
            {{ info.city }}
          </td>
          <td>
            {{ info.remark }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/**
 * 使用VUE实现一个页面，展示一个表格数据，
 * 数据包括：日期、姓名、城市、年龄、备注。要求页面日期宽度固定，
 * 其他弹性扩展，表格的表头可以点击排序

 */
export default {
  name: 'UserInfo',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      dataList: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.generateData()
  },
  destroyed() {},
  methods: {
    generateData() {
      for (let i = 0; i < 10; i++) {
        let obj = {
          key: i,
          date: this.generateDate(),
          name: 'name' + i,
          city: 'city' + i,
          age: Math.round(Math.random() * 50),
          remark: 'remark info' + i
        }
        this.dataList.push(obj)
      }
    },
    generateDate() {
      const year = [2000, 2010, 2012, 2015, 2019]
      let month = Math.ceil(Math.random() * 12)
      let monthStr = month < 10 ? '0' + month : '' + month
      let date = Math.ceil(Math.random() * 30)
      let dateStr = date < 10 ? '0' + date : '' + date
      return (
        '' +
        year[Math.floor(Math.random() * year.length)] +
        '-' +
        monthStr +
        '-' +
        dateStr
      )
    },
    sort(attr, flag) {
      this.dataList.sort(this.sortFn(attr, flag))
    },
    sortFn(attr, flag) {
      return (a, b) => {
        if (flag === 'asc') {
          if (a[attr] > b[attr]) {
            return 1
          }
          if (a[attr] < b[attr]) {
            return -1
          }
          return 0
        } else {
          if (a[attr] > b[attr]) {
            return -1
          }
          if (a[attr] < b[attr]) {
            return 1
          }
          return 0
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.h {
  text-align: center;
}
table {
  width: 100%;
}
th,
td {
  border: 1px solid #666;
}
.asc-desc {
  float: right;
  span {
    margin-left: 10px;
    font-size: 12px;
    color: #999;
  }
}
td {
  text-align: center;
}
.date {
  width: 200px;
}
</style>

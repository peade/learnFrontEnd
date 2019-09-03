<template>
  <blockquote cite="https://tools.ietf.org/html/rfc1149">
    <p>Avian carriers can provide high delay, low
      throughput, and low altitude service. The
      connection topology is limited to a single
      point-to-point path for each carrier, used with
      standard carriers, but many carriers can be used
      without significant interference with each other,
      outside of early spring. This is because of the 3D
      ether space available to the carriers, in contrast
      to the 1D ether used by IEEE802.3. The carriers
      have an intrinsic collision avoidance system, which
      increases availability.</p>
  </blockquote>
</template>

<script>
  export default {
    name: 'blockquote',
    mixins: [],

    components: {},

    props: {},

    data() {
      return {}
    },

    computed: {},

    watch: {},

    created() {
    },

    mounted() {
    },

    destroyed() {
    },

    methods: {}
  }
</script>

<style scoped>
  blockquote {
    border-left: 8px solid #d8d8d8;
  }
</style>
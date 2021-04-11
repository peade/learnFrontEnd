<template>
  <div>
    <h4>适配器模式(Adapter Pattern)</h4>
    <div>
      适配器模式是作为两个不同接口的一种聚合，把比如说SD卡适配器，无论使用TF或SD卡或者其它卡，对外输出都是USB接口。
    </div>
    <div>
      可以让两个不同接口作为一个适配的接口使用，这样对下层的关心可以减少.
    </div>
  </div>
</template>
<script>
import { AudioPlayer } from '@/util/adapter'
export default {
  name: 'AdapterPattern',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const audioPlayer = new AudioPlayer()
    audioPlayer.play('mp3', 'beyond the horizon.mp3')
    audioPlayer.play('mp4', 'alone.mp4')
    audioPlayer.play('vlc', 'far far away.vlc')
    audioPlayer.play('avi', 'mind me.avi')
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>

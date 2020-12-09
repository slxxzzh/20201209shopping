<template>
  <div class="wrapper">123</div>
</template>

<script>
import BScroll from 'better-scroll'
const bs = new BScroll('.wrapper', {
  pullUpLoad: true,
  scrollbar: true,
  pullDownRefresh: true
  // and so on
})
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {

  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>
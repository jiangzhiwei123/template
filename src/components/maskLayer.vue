<!-- mask蒙层 -->
<template>
  <div id="mask" class="mask" v-show="visible"></div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    init() {
      var modal = document.getElementById("mask"); // 弹窗dom对象
      modal.addEventListener(
        "touchmove",
        function(e) {
          e.preventDefault();
        },
        false
      );
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
</style>

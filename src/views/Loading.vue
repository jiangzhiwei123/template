<!-- 预加载图片页面 -->
<template>
  <div>
    <div class="text">{{ progress }}%</div>
    <maskLayer :visible="visible.mask"></maskLayer>
  </div>
</template>
<script>
import imgList from "../assets/js/imgList";
import preloadImg from "../common/js/preloadImg";
import maskLayer from "../components/maskLayer.vue";

export default {
  data() {
    return {
      // 是否有序加载
      order: false,
      // 图片数字
      imgList: imgList,
      // 加载的图片序号
      loadedCount: 0,
      // 加载进度
      progress: 0,
      imgsSum: imgList.length,
      visible: {
        mask: true
      }
    };
  },

  components: { maskLayer },

  computed: {},

  methods: {
    loading(progress) {
      this.progress = progress;
    },
    loaded() {
      this.$router.replace("/index");
    }
  },
  mounted() {
    let imgUrlArr = [];
    for (let key in this.imgList) {
      imgUrlArr = [...imgUrlArr, ...this.imgList[key]];
    }
    if (imgUrlArr.length === 0) {
      this.$router.replace("/index");
    } else {
      preloadImg(this.order, imgUrlArr, this.loading, this.loaded);
    }
  }
};
</script>
<style lang="less" scoped>
.text {
  position: fixed;
  width: 100%;
  text-align: center;
  color: #fff;
  top: 50%;
  font-size: 30px;
  z-index: 11;
}
</style>

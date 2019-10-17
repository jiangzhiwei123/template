import Vue from "vue";
import VConsole from "vconsole";
import { Toast } from "vant";
import App from "./App.vue";
import router from "./router/index";
import axios from "./axios/index";
import store from "./store/store";
import "./common/less/reset.less";
import maskLayer from "./components/maskLayer.vue";

Vue.component("mask-layer", maskLayer);

Vue.use(Toast);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
// runtimex
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
if (
  process.env.NODE_ENV === "development" &&
  process.env.VUE_APP_MOCK_ENABLED === "true"
) {
  // dev环境引入mock数据
  require("./mock/index");
}
if (process.env.VUE_APP_ENV === "sit") {
  new VConsole();
}
document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
  // 通过下面这个API隐藏右上角按钮
  // eslint-disable-next-line no-undef
  WeixinJSBridge.call("hideOptionMenu");
});

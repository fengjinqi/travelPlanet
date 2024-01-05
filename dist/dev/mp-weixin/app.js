"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/creative/creative.js";
  "./pages/map/map.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    const { statusBarHeight, platform, windowHeight, screenHeight } = common_vendor.index.getSystemInfoSync();
    const globalData = common_vendor.reactive({
      statusBarHeight: 0,
      //状态栏高度
      menuButtonHeight: 0,
      // 胶囊按钮高度 一般是32px 如果获取不到就使用32px
      navigationBarHeight: 0,
      navigationBarAndStatusBarHeight: 0
    });
    const { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    console.log(top, height);
    globalData.statusBarHeight = statusBarHeight;
    globalData.menuButtonHeight = height ? height : 32;
    if (top && top !== 0 && height && height !== 0) {
      globalData.navigationBarHeight = (top - globalData.statusBarHeight) * 2 + height;
    } else {
      globalData.navigationBarHeight = platform === "android" ? 48 : 40;
    }
    globalData.navigationBarAndStatusBarHeight = globalData.navigationBarHeight + globalData.statusBarHeight;
    common_vendor.provide("globalData", globalData);
    console.log(globalData);
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fengjinqi/Desktop/travelPlanet/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.uvUI);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

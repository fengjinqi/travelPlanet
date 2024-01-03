"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_swiper2 = common_vendor.resolveComponent("uv-swiper");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uv_notice_bar2 = common_vendor.resolveComponent("uv-notice-bar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  (_easycom_uv_icon2 + _easycom_uv_swiper2 + _easycom_uv_picker2 + _easycom_uv_image2 + _easycom_uv_notice_bar2 + _easycom_uv_tabs2)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_swiper = () => "../../node-modules/@climblee/uv-ui/components/uv-swiper/uv-swiper.js";
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
const _easycom_uv_notice_bar = () => "../../node-modules/@climblee/uv-ui/components/uv-notice-bar/uv-notice-bar.js";
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_swiper + _easycom_uv_picker + _easycom_uv_image + _easycom_uv_notice_bar + _easycom_uv_tabs)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const picker = common_vendor.ref();
    const data = common_vendor.reactive({
      current: 0,
      navigationBarAndStatusBarHeight: 0,
      statusBarHeight: 0,
      navigationBarHeight: 0,
      menuButtonHeight: 0,
      navigationTitle: "",
      text: ["uv-ui众多组件覆盖开发过程的各个需求", "组件功能丰富，多端兼容", "让您快速集成，开箱即用"],
      list1: [{
        name: "关注"
      }, {
        name: "推荐"
      }, {
        name: "电影"
      }],
      list: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png"
      ],
      columns: [
        [
          {
            label: "四川",
            // 其他属性值
            id: 2021
            // ...
          },
          {
            label: "重庆",
            id: 804
          },
          {
            label: "北京",
            id: 804
          }
        ]
      ]
    });
    const getPicker = () => {
      picker.value.open();
      console.log(picker);
    };
    const confirm = (e) => {
      console.log(e);
      data.navigationTitle = e.value[0].label;
    };
    common_vendor.onShow(() => {
      const globalData = common_vendor.inject("globalData");
      data.navigationTitle = data.columns[0][1].label;
      data.navigationBarAndStatusBarHeight = globalData.navigationBarAndStatusBarHeight;
      data.statusBarHeight = globalData.statusBarHeight;
      data.menuButtonHeight = globalData.menuButtonHeight;
      data.navigationBarHeight = globalData.navigationBarHeight;
    });
    return (_ctx, _cache) => {
      return {
        a: data.statusBarHeight + "px",
        b: common_vendor.p({
          name: "empty-address",
          size: "18"
        }),
        c: common_vendor.t(data.navigationTitle),
        d: common_vendor.p({
          name: "arrow-down",
          size: "12"
        }),
        e: common_vendor.o(getPicker),
        f: data.menuButtonHeight + "px",
        g: data.navigationBarHeight + "px",
        h: data.navigationBarHeight + "px",
        i: data.navigationBarAndStatusBarHeight + "px",
        j: common_vendor.f(data.list, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.n(index === data.current && "indicator__dot--active")
          };
        }),
        k: common_vendor.o((e) => data.current = e.current),
        l: common_vendor.p({
          list: data.list,
          autoplay: false,
          circular: true,
          radius: "0"
        }),
        m: common_vendor.sr(picker, "83a5a03c-3", {
          "k": "picker"
        }),
        n: common_vendor.o(confirm),
        o: common_vendor.p({
          columns: data.columns,
          keyName: "label"
        }),
        p: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        q: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        r: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        s: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        t: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        v: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "80px",
          height: "80px"
        }),
        w: common_vendor.p({
          name: "volume",
          size: "24"
        }),
        x: common_vendor.p({
          bgColor: "#fff",
          color: "#333",
          icon: false,
          text: data.text,
          direction: "column"
        }),
        y: common_vendor.p({
          list: data.list1,
          scrollable: false
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "/Users/fengjinqi/Desktop/travelPlanet/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

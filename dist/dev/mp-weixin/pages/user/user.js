"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  (_easycom_uv_icon2 + _easycom_uv_avatar2 + _easycom_uv_image2)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_avatar = () => "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_avatar + _easycom_uv_image)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "user",
  setup(__props) {
    common_vendor.ref();
    const data = common_vendor.reactive({
      navigationBarAndStatusBarHeight: 0,
      statusBarHeight: 0,
      navigationBarHeight: 0,
      menuButtonHeight: 0,
      navigationTitle: "",
      isLogin: false
    });
    common_vendor.onShow(() => {
      const globalData = common_vendor.inject("globalData");
      data.navigationBarAndStatusBarHeight = globalData.navigationBarAndStatusBarHeight;
      data.statusBarHeight = globalData.statusBarHeight;
      data.menuButtonHeight = globalData.menuButtonHeight;
      data.navigationBarHeight = globalData.navigationBarHeight;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: data.statusBarHeight + "px",
        b: data.isLogin
      }, data.isLogin ? {
        c: common_vendor.p({
          size: "24",
          name: "scan",
          label: "核销"
        }),
        d: data.menuButtonHeight + "px"
      } : {}, {
        e: data.navigationBarHeight + "px",
        f: data.navigationBarHeight + "px",
        g: data.navigationBarAndStatusBarHeight + "px",
        h: data.isLogin
      }, data.isLogin ? {
        i: common_vendor.p({
          src: "https://via.placeholder.com/200x200.png/2878ff",
          size: "60"
        }),
        j: common_vendor.p({
          size: "18",
          name: "setting",
          label: "设置"
        }),
        k: common_vendor.p({
          size: "18",
          name: "empty-news"
        })
      } : {
        l: common_vendor.p({
          src: "https://via.placeholder.com/200x200.png/2878ff",
          size: "60"
        }),
        m: common_vendor.p({
          size: "18",
          name: "setting",
          label: "设置"
        })
      }, {
        n: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "40px",
          height: "40px"
        }),
        o: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "40px",
          height: "40px"
        }),
        p: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "40px",
          height: "40px"
        }),
        q: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "40px",
          height: "40px"
        }),
        r: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "20px",
          height: "20px"
        }),
        s: common_vendor.p({
          size: "18",
          name: "arrow-right"
        }),
        t: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "20px",
          height: "20px"
        }),
        v: common_vendor.p({
          size: "18",
          name: "arrow-right"
        }),
        w: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "20px",
          height: "20px"
        }),
        x: common_vendor.p({
          size: "18",
          name: "arrow-right"
        }),
        y: common_vendor.p({
          src: "https://cdn.uviewui.com/uview/album/1.jpg",
          width: "20px",
          height: "20px"
        }),
        z: common_vendor.p({
          size: "18",
          name: "arrow-right"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-99b0ba47"], ["__file", "/Users/fengjinqi/Desktop/travelPlanet/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);

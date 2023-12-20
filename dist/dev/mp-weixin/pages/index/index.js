"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_badge = common_vendor.resolveComponent("uni-badge");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_component_uni_badge + _easycom_uv_button2 + _easycom_uv_icon2)();
}
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_button + _easycom_uv_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.p({
          size: "small",
          text: 100,
          absolute: "rightBottom",
          type: "primary"
        }),
        c: common_vendor.p({
          type: "primary",
          text: "确定"
        }),
        d: common_vendor.p({
          name: "photo",
          size: "30",
          color: "#909399"
        }),
        e: common_vendor.p({
          name: "lock",
          size: "30",
          color: "#909399"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fengjinqi/Desktop/travelPlanet/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

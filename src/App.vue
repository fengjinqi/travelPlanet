<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { onReady } from '@dcloudio/uni-app';
import {getCurrentInstance} from 'vue';
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});


const { ctx } = getCurrentInstance();
console.log(uni.$uv.os(),'434')
console.log(uni.$uv.sys(),'434')
console.log(uni.$uv.platform)

</script>
<style lang="scss">
	@import '@climblee/uv-ui/index.scss';
</style>

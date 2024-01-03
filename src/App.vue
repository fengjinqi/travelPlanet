<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	import { provide, reactive } from 'vue'
	import type { globalDataInterface } from '@/utils/utils'
	onLaunch(() => {
		console.log("App Launch");
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
	const { statusBarHeight, platform, windowHeight, screenHeight } = uni.getSystemInfoSync()
	const globalData = reactive<globalDataInterface>({
		statusBarHeight: 0,//状态栏高度
		menuButtonHeight: 0,// 胶囊按钮高度 一般是32px 如果获取不到就使用32px
		navigationBarHeight: 0,
		navigationBarAndStatusBarHeight: 0,

	})

	// #ifndef H5
	const { top, height } = uni.getMenuButtonBoundingClientRect()
	console.log(top, height)
	globalData.statusBarHeight = statusBarHeight as number
	globalData.menuButtonHeight = height ? height : 32

	// 判断胶囊按钮信息是否成功获取
	if (top && top !== 0 && height && height !== 0) {
		// 导航栏高度
		globalData.navigationBarHeight = (top - (globalData.statusBarHeight as number)) * 2 + height
		// console.log('导航高度',(top - statusBarHeight) * 2 + height)
	} else {
		//个别手机获取不到 根据机型进行赋值
		globalData.navigationBarHeight = platform === 'android' ? 48 : 40
	}
	//用于绝对定位 占用空间
	globalData.navigationBarAndStatusBarHeight = globalData.navigationBarHeight + (globalData.statusBarHeight as number);
	// #endif  
	// #ifdef H5
	globalData.menuButtonHeight = 32
	globalData.navigationBarHeight = platform === 'android' ? 48 : 40
	globalData.navigationBarAndStatusBarHeight = globalData.navigationBarHeight + (globalData.statusBarHeight as number);
	// #endif
	provide('globalData', globalData)
</script>
<style lang="scss">
	@import '@climblee/uv-ui/index.scss';
</style>
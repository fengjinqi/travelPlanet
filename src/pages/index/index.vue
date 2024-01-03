<template>
	<view class="content">

		<view class="navigation-container" :style="{height:data.navigationBarAndStatusBarHeight+'px'}">
			<view :style="{height:data.statusBarHeight+'px'}"> </view>
			<view class="navigation-bar" :style="{height:  data.navigationBarHeight+'px'}">
				<view class="navigation-buttons" :style="{height: data.menuButtonHeight+'px'}">
					<view class="navigation-back" @click="getPicker">
						<uv-icon name="empty-address" size="18"></uv-icon>
						<text class="navigation-back-title">{{data.navigationTitle}}</text>
						<uv-icon name="arrow-down" size="12"></uv-icon>
					</view>
				</view>
				<view class="navigation-title" :style="{lineHeight: data.navigationBarHeight+'px'}"></view>
			</view>
		</view>
		<!-- <view class="" :style="{marginTop:data.navigationBarAndStatusBarHeight+'px'}"> -->
		<uv-swiper :list="data.list" @change="e => data.current = e.current" :autoplay="false" circular radius='0'>
			<template v-slot:indicator>
				<view class="indicator">
					<view class="indicator__dot" v-for="(item, index) in data.list" :key="index"
						:class="[index === data.current && 'indicator__dot--active']"></view>
				</view>
			</template>
		</uv-swiper>
		<!-- </view> -->


		<uv-picker ref="picker" :columns="data.columns" keyName="label" @confirm="confirm"></uv-picker>


		<view class="tabs-container">
			<view class="tabs-scroll">
				<view class="tabs">
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						文创纪念</view>
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						在线拍卖</view>
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						文旅打卡游</view>
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						文创纪念</view>
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						在线拍卖</view>
					<view class="tab"><uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px"
							height="80px"></uv-image>
						文旅打卡游</view>

					<!-- Add more tabs here if needed -->
				</view>
			</view>
		</view>


		<view class="volume">
			<uv-icon name="volume" size="24"></uv-icon>
			<text class="title">公告 |</text> <uv-notice-bar bgColor='#fff' color="#333" :icon='false' :text="data.text"
				direction="column"></uv-notice-bar>
		</view>
<uv-tabs :list="data.list1"  :scrollable='false'></uv-tabs>
	</view>
</template>

<script setup lang="ts">
	import { reactive, onMounted, nextTick, inject, ref } from 'vue'
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	import type { globalDataInterface } from '@/utils/utils'
	const picker = ref()
	const data = reactive({
		current: 0,
		navigationBarAndStatusBarHeight: 0,
		statusBarHeight: 0,
		navigationBarHeight: 0,
		menuButtonHeight: 0,
		navigationTitle: '',
		text: ['uv-ui众多组件覆盖开发过程的各个需求', '组件功能丰富，多端兼容', '让您快速集成，开箱即用'],
		list1: [{
							name: '关注',
						}, {
							name: '推荐',
						}, {
							name: '电影'
						}],
		list: [
			'https://cdn.uviewui.com/uview/swiper/swiper1.png',
			'https://cdn.uviewui.com/uview/swiper/swiper2.png',
			'https://cdn.uviewui.com/uview/swiper/swiper3.png',
		],
		columns: [
			[{
				label: '四川',
				// 其他属性值
				id: 2021
				// ...
			}, {
				label: '重庆',
				id: 804
			}, {
				label: '北京',
				id: 804
			},
			]
		]
	})
	const getPicker = () => {
		picker.value.open()
		console.log(picker)
	}
	const confirm = (e : any) => {
		console.log(e)
		data.navigationTitle = e.value[0].label
	}
	onShow(() => {
		const globalData = inject('globalData') as globalDataInterface;

		data.navigationTitle = data.columns[0][1].label
		data.navigationBarAndStatusBarHeight = globalData.navigationBarAndStatusBarHeight
		data.statusBarHeight = globalData.statusBarHeight
		data.menuButtonHeight = globalData.menuButtonHeight
		data.navigationBarHeight = globalData.navigationBarHeight
	})
</script>
<style>
	page {
		background-color: #f6f6f6 !important;
	}
</style>
<style scoped lang="scss">
	.navigation-container {
		// position: fixed;
		width: 100%;
		z-index: 9999999;
		top: 0;
		left: 0;
		background-color: skyblue;
	}

	.navigation-bar {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.navigation-buttons {
		display: flex;
		align-items: center;
		margin-left: 10px;
		box-sizing: border-box;
		background-color: transparent;
		// width: 68rpx;
	}

	.navigation-back {
		display: flex;
		font-size: 15px;
		background-color: #fff;
		border-radius: 5px;
		padding: 2px 3px;
	}

	.navigation-back-title {
		margin: 0 2px;
	}

	.statusbarClas {
		background: transparent;
		color: black;
	}

	.nav-img {
		width: 16rpx;
	}

	.navigation-title {
		position: absolute;
		left: 104px;
		right: 104px;
		text-align: center;
		font-size: 30rpx;
		color: #000000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: 楷体;
	}


	@mixin flex($direction: row) {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: $direction;
	}

	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}

	.nav {
		display: flex;
		justify-content: space-around;
		border-radius: 5px;
		padding: 15px;
		background-color: #fff;

		.nav-main {
			display: flex;
			flex-direction: column;
			width: 25%;
			align-items: center;
			font-size: 14px;
		}
	}

	.volume {
		display: flex;
		background: #fff;
		margin-top: 5px;
		align-items: center;
		padding: 0 5px;

		.title {
			margin: 0 3px;
		}
	}

	.tabs-container {
		display: flex;
		justify-content: center;
		overflow-x: auto;
		margin-bottom: 10px;
		background-color: #fff;
	}

	.tabs-scroll {
		display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
	}

	.tabs {
		display: flex;
		gap: 10px;
		padding: 0 10px;
	}

	.tab {
		padding: 10px 20px;
	
		border-radius: 5px;
	 flex-grow: 1;
	  flex: 0 0 auto;
	}


</style>
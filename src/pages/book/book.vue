<template>
	<view class="content">
		
		<view class="recommend">
			<view class="recommend-title">
				纪念章
			</view>
		</view>

		<view class="container">
			<view class="container-list">
				<view class="recommends-list-top">
					<uv-image src="@/static/images/1705038122974.jpg" radius="5" width="100%"
						height="100px"></uv-image>
					<view class="recommends-list-tag">
						峨眉山金顶
					</view>
				</view>
				
				<view class="recommends-list-main">
					<view class="recommends-list-title uv-line-2">
						川渝数藏-峨眉山金顶
					</view>
					
					<view class="recommends-list-desc">
						限量
					<view class="recommends-list-desc-info">100份</view>
					</view>
				</view>
			</view>
			<view class="container-list">
				<view class="recommends-list-top">
					<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" radius="5" width="100%"
						height="100px"></uv-image>
					<view class="recommends-list-tag">
						金顶纪念照
					</view>
				</view>
				<view class="recommends-list-main">
					<view class="recommends-list-title uv-line-2">
						峨眉山数字门票
					</view>
					<view class="price">
						￥75.00
					</view>
					<view class="recommends-list-desc">
						限量
						<view class="recommends-list-desc-info">100份</view>
					</view>
				</view>
			</view>

			<view class="container-list">
				<view class="recommends-list-top">
					<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" radius="5" width="100%"
						height="100px"></uv-image>
					<view class="recommends-list-tag">
						金顶纪念照
					</view>
				</view>
				<view class="recommends-list-main">
					<view class="recommends-list-title uv-line-2">
						峨眉山数字门票
					</view>
					<view class="price">
						￥75.00
					</view>
					<view class="recommends-list-desc">
						限量
						<view class="recommends-list-desc-info">100份</view>
					</view>
				</view>
			</view>

			<view class="container-list">
				<view class="recommends-list-top">
					<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" radius="5" width="100%"
						height="100px"></uv-image>
					<view class="recommends-list-tag">
						金顶纪念照
					</view>
				</view>
				<view class="recommends-list-main">
					<view class="recommends-list-title uv-line-2">
						成都博物馆数字金香囊音

						乐盒纪念卡
					</view>
					<view class="price">
						￥75.00
					</view>
					<view class="recommends-list-desc">
						限量
						<view class="recommends-list-desc-info">100份</view>
					</view>
				</view>
			</view>

		</view>
		
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
	const go=(url:string)=>{
		uni.navigateTo({
			url:url
		})
	}
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
		//display: flex;
		justify-content: center;
		overflow-x: auto;
		margin-bottom: 10px;
		background-color: #fff;
	}

	.tabs-scroll {
		//display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
	}

	.tabs {
		display: flex;
		gap: 10px;
		padding: 10px;
	}

	.tab {
		//padding: 10px 20px;

		border-radius: 5px;
		flex-grow: 1;
		flex: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.showcase {
		background-color: #fff;
		margin-top: 10px;
		padding: 10px;

		.showcase-list {
			border-radius: 15px;
			margin-bottom: 10px;
		}

		.showcase-flex {
			display: flex;
			gap: 10px;

			& .showcase-list {
				flex: 1;

			}
		}
	}

	.recommend {
		background: #fff;
		margin-top: 10px;
		padding: 15px;

		.recommend-title {
			margin-bottom: -10px;
		}

		.recommends {
			display: flex;
			overflow-x: auto;
			font-size: 14px;
			gap: 10px;
			white-space: nowrap;

			.recommends-list {
				flex: 0;

				.recommends-list-top {
					position: relative;

					.recommends-list-tag {
						position: absolute;
						bottom: 1px;
						background-color: #ff0000;
						border-radius: 5px;
						padding: 2px;
						font-size: 10px;
					}
				}

				.recommends-list-main {

					.price {
						font-weight: bold;
					}

					.recommends-list-desc {
						display: flex;

						font-size: 8px;
					}
				}

			}

		}
	}

	.container {
		margin-top: 10px;
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px 20px;

		.container-list {
			background-color: #fff;
			padding: 10px;
			flex-basis: 40%;

			.recommends-list-top {
				position: relative;

				.recommends-list-tag {
					position: absolute;
					bottom: 2px;
					background-color: #fff;
					border-radius: 5px;
					padding: 2px;
					font-size: 14px;
				}
			}

			.recommends-list-main {

				.price {
					font-weight: bold;
				}

				.recommends-list-desc {
					display: flex;

					font-size: 14px;
				}
			}

		}
	}
.login{
	    position: fixed;
	    bottom: 10%;
	    left: 0;
	    right: 0;
	    display: flex;
	    background: #fff;
	    justify-content: space-around;
	    padding: 5px;
	    align-items: center;
		.login-main{
			display: flex;
  align-items: center;
			justify-content: space-around;
			
		}
}
</style>
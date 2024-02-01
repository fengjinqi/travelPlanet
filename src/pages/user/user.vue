<template>
	<view class="content">
		<view class="navigation-container" :style="{height:data.navigationBarAndStatusBarHeight+'px'}">
			<view :style="{height:data.statusBarHeight+'px'}"> </view>
			<view class="navigation-bar" :style="{height:  data.navigationBarHeight+'px'}">
				<view class="navigation-buttons" v-if="data.isLogin" :style="{height: data.menuButtonHeight+'px'}">
					<view class="navigation-back">
<uv-icon size="24" name="scan" label="核销"></uv-icon>
					</view>
				</view>
				<view class="navigation-title" :style="{lineHeight: data.navigationBarHeight+'px'}">个人中心</view>
			</view>
		</view>
		<view class="user" v-if="data.isLogin">
			<view class="user-img">
				<uv-avatar src="https://via.placeholder.com/200x200.png/2878ff" size="60"></uv-avatar>
				<view class="buttom">
					更换
				</view>
			</view>
			<view class="user-setting">
				<view class="user-setting-top">
					<view class="user-setting-top-user">
						风哈哈
						<view class="user-setting-top-type">
							商家
						</view>
					</view>
					<uv-icon size="18" name="setting" label="设置"></uv-icon>
				</view>
				<view class="user-setting-bottom">
					<view class="user-setting-id">a5f83e6b5c2-693ee6ba5-71de0c58b</view>
						<uv-icon size="18" name="empty-news"></uv-icon>
				</view>

			</view>
		</view>
		<view class="user" v-else>
			<view class="user-imgs">
				<uv-avatar src="https://via.placeholder.com/200x200.png/2878ff" size="60"></uv-avatar>
				<view class="buttom">
					点击登录
				</view>
			</view>
			<view class="user-setting" style=" flex: initial;;">
	
					<uv-icon size="18" name="setting" label="设置"></uv-icon>
				

			</view>
		</view>
		<view class="userframe">
			<view class="userframe-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="40px" height="40px"></uv-image>
				<view class="userframe-item-text">
					我的订单
				</view>
			</view>
			<view class="userframe-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="40px" height="40px"></uv-image>
				<view class="userframe-item-text">
					我的权益
				</view>
			</view>
			<view class="userframe-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="40px" height="40px"></uv-image>
				<view class="userframe-item-text">
					我的收藏
				</view>
			</view>
			<view class="userframe-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="40px" height="40px"></uv-image>
				<view class="userframe-item-text">
					我的邀请
				</view>
			</view>
		</view>
	
		<view class="user-list">
			<view class="user-list-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="20px" height="20px"></uv-image>
				<view class="user-list-item-text">
					关于我们
					<uv-icon size="18" name="arrow-right"></uv-icon>
				</view>
			</view>
			<view class="user-list-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="20px" height="20px"></uv-image>
				<view class="user-list-item-text">
				
					添加交流群
					<uv-icon size="18" name="arrow-right"></uv-icon>
				</view>
			</view>
			<view class="user-list-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="20px" height="20px"></uv-image>
				<view class="user-list-item-text">
					分享小程序
					<uv-icon size="18" name="arrow-right"></uv-icon>
				</view>
			</view>
			<view class="user-list-item">
				<uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="20px" height="20px"></uv-image>
				<view class="user-list-item-text">
					下载APP
					<uv-icon size="18" name="arrow-right"></uv-icon>
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

		navigationBarAndStatusBarHeight: 0,
		statusBarHeight: 0,
		navigationBarHeight: 0,
		menuButtonHeight: 0,
		navigationTitle: '',
		isLogin:false


	})
	onShow(() => {
		const globalData = inject('globalData') as globalDataInterface;
		data.navigationBarAndStatusBarHeight = globalData.navigationBarAndStatusBarHeight
		data.statusBarHeight = globalData.statusBarHeight
		data.menuButtonHeight = globalData.menuButtonHeight
		data.navigationBarHeight = globalData.navigationBarHeight
	})
</script>

<style scoped lang="scss">
	page {
		background-color: #f6f6f6 !important;
	}

	.navigation-container {
		// position: fixed;
		width: 100%;
		z-index: 9999999;
		top: 0;
		left: 0;
		background-color: skyblue;

		.navigation-bar {
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: center;

			.navigation-buttons {
				display: flex;
				align-items: center;
				margin-left: 10px;
				box-sizing: border-box;
				background-color: transparent;
				// width: 68rpx;
			}
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
	}

	.user {
		background-color: #fff;
		border-radius: 15px;
		padding: 15px;
		margin: 10px 8px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		.user-img {
			// display: flex;
			// align-items: center;
			position: relative;
			.buttom {
				margin-left: 10px;
				font-weight: bold;
				position: absolute;
				bottom: 10px;
			}
		}
		.user-imgs{
			display: flex;
			align-items: center;
			.buttom{
				font-weight: bold;
				margin-left: 10px;
			}
		}
		.user-setting {
			display: flex;
			flex-direction: column;
			flex: 1;
			    margin-left: 15px;
			.user-setting-top{
				display: flex;
				justify-content: space-between;
		align-items: center;
				line-height: 30px;
				.user-setting-top-user{
					display: flex;
					justify-content: space-between;
				    align-items: center;
					.user-setting-top-type{
						border: 1px solid #ccc;
						padding: 0px 2px;
						line-height: normal;
						border-radius: 5px;
						    margin-left: 5px;
					}
				}
			}
			.user-setting-bottom{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.user-setting-id{
					font-size: 12px;
				}
			}
		}
	}
	.userframe{
		background-color: #fff;
		border-radius: 15px;
		padding: 15px;
		margin: 10px 8px;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		.userframe-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			.userframe-item-text{
				font-size: 14px;
				margin-top: 2px;
			}
		}
	}
	.user-list{
		background-color: #fff;
		border-radius: 15px;
		padding: 15px;
			margin: 10px 8px;
	.user-list-item{
		display: flex;
		justify-content: space-between;
		height: 45px;
		line-height: 45px;
		align-items: center;
		.user-list-item-text{
			flex: 1;
			margin-left: 5px;
			display: flex;
			    justify-content: space-between;
				border-bottom: 1px solid #ccc;
		}
	}
	}
</style>
<template>
	<view class="content">

		<view class="commodity-img">
			<uv-image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" radius="5" width="100%"
				height="300rpx"></uv-image>
			<view class="commodity-img-status">
				已售匿
			</view>
		</view>

		<view class="shops">
			<view class="shops-money">
				<view class="money">
					¥19.90
				</view>
				<view class="shop-number">
					<view class="text">
						限量
					</view>
					<view class="number">
						1000份
					</view>
				</view>
			</view>
			<view class="shops-title uv-line-1">

				霸王茶姬伯牙绝弦大杯数字纪念兑换券
			</view>
			<view class="shops-info">
				购买后可在【成都】任意门店核销使用；赠送霸王茶姬授权限定数字纪念卡（核销后到账）。
			</view>
		</view>

		<view class="shop">
			<view class="shop-nav">
				<view class="nav active">商品详情</view>
				<view class="nav">商品权益</view>
				<view class="nav">图文介绍</view>
			</view>
			<uv-line ></uv-line>
			
			<view class="shop-details">
				<view class="b">
					商品包含
				</view>
				<view class="shop-details-info">
					<view class="info">
						伯牙绝弦大杯（成都任意门店到店核销兑换）
					</view>
					<view class="number">
						x1
					</view>
				</view>
			</view>		
			<view class="shop-details">
				<view class="b">
					使用时间
				</view>
				<view class="shop-details-info">
					<view class="info">
					使用时间：2023.11.22-2023.12.15 逾期自动退款
					</view>
				</view>
			</view>
			
			<view class="shop-details">
				<view class="b">
					商品权益
				</view>
				<view class="shop-details-info">
					<view class="info">
						霸王茶姬授权限定永久数字纪念卡
					</view>
					<view class="number">
						x1
					</view>
				</view>
				<view class="shop-details-qy">
					<uv-image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" radius="5" width="100%"
						height="300rpx"></uv-image>
				</view>
			</view>	
			
			
			<view class="shop-details">
				<view class="b">
					图文介绍
				</view>
			
				<view class="shop-details-qy">
					<uv-image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" radius="5" width="100%"
						height="300rpx"></uv-image>
				</view>
			</view>	
		</view>
		
		
		<view class="footer">
		<view class="footer-icon">
			<uv-icon size="24" name="star"></uv-icon>
		<view class="footer-icon-text">
				收藏
			</view>
		</view>
		<view class="footer-icon">
			<uv-icon size="24" name="weixin-circle-fill"></uv-icon>
			<view class="footer-icon-text">
				分享
			</view>
		</view>
		<view class="footer-submit">
			立即购买
		</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	const data = reactive({
		current: 0,
		list: [
			'https://cdn.uviewui.com/uview/swiper/swiper1.png',
			'https://cdn.uviewui.com/uview/swiper/swiper2.png',
			'https://cdn.uviewui.com/uview/swiper/swiper3.png',
		],
	})
</script>

<style lang="scss" scoped>
	page {
		background-color: #f6f6f6 !important;
	}

	.commodity-img {
		position: relative;

		.commodity-img-status {
			position: absolute;
			color: #000;
			background-color: #ccc;
			border-radius: 50%;
			width: 100px;
			height: 100px;
			text-align: center;
			line-height: 100px;
			top: 50%;
			left: 50%;
			margin-left: -50px;
			margin-top: -50px;
		}
	}

	.shops {
		padding: 15px;
		background: #fff;

		.shops-money {
			display: flex;

			.money {
				font-weight: bold;
			}

			.shop-number {
				display: flex;
				margin-left: 8px;
				border: 1px solid #ccc;

				.number {
					background-color: #ccc;
				}
			}
		}

		.shops-title {
			margin-top: 10px;
		}

		.shops-info {
			margin-top: 10px;
		}
	}

	.shop {
		margin-top: 15px;
		background-color: #fff;
		padding-bottom: 80px;
		.shop-nav {
			display: flex;
			justify-content: space-around;
			padding: 15px;
			.active{
				font-weight: bold;
			}
		}
		.shop-details{
			padding: 15px;
			.b{
				font-weight: bold;
				border-left: 2px solid #ccc;
				padding-left: 5px;
			}
			.shop-details-info{
				display: flex;
				font-size: 13px;
				padding-left: 5px;
				justify-content: space-between;
				margin-top: 5px;
				.info{
					
				}
				.number{
					
				}
			}
			.shop-details-qy{
				margin-top: 15px;
			}
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		display: flex;
		background-color: #fff;
		padding: 15px;
		width: 100%;
		    box-sizing: border-box;
			align-items: center;
		.footer-icon{
			display: flex;
			color: #666;
			font-size: 14px;
			margin-right: 8px;
			.footer-icon-text{
				padding-left: 4px;
			}
		}
		.footer-submit{
			flex: 1;
			border-radius: 15px;
			background-color: #ccc;
			margin-left: 10px;
			text-align: center;
			padding: 5px 0;
		}
	}

</style>
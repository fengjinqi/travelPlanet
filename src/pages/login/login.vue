<template>
	<view class="content">
		<view class="main">
			
			<view class="logo">
				<uv-image src="https://cdn.uviewui.com/uview/swiper/swiper1.png" radius="5" width="60px"
					height="60px"></uv-image>
					meta数旅星球
			</view>
			
			<view class="submit">
				微信登录/注册
			</view>
			
			<view class="ys">
				
				<radio value="r1" style="transform:scale(0.7)" checked="true" />
				我已阅读并同意
				<view class="color">
					《用户协议》
				</view>
				<view class="color">
					《隐私政策》
				</view>
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
.content{
	.main{
		display: flex;
		flex-direction: column;
		align-items: center;
		   margin-top: 30%;
		.logo{
			display: flex;
			flex-direction: column;
			align-items: center;
			 
		}
		.submit{
			border-radius: 20px;
			padding: 5px 35px;;
			background-color: #ccc;
			margin-top: 20px;
		}
		.ys{
			display: flex;
			font-size: 12px;
			    align-items: center;
				margin-top: 20px;
				.color{
					color: #007aff;
				}
		}
	}
}
</style>

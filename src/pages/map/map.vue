<template>
	<view class="content">
		<map id="map" class="map" :enable-zoom='false' :markers="data.markers" :style="{width:'100%',height:mapHeight+'px'}" ref="map" :show-location="true"
			:latitude="data.latitude" :longitude="data.longitude">
			<cover-view slot="callout">

				<cover-view v-for="(item,index) in data.markers" :key="index" class="customCallout" :marker-id="item.id">
					<view class="customCallout-content">
						示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
						示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
						示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
						示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
						示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
					</view>
				</cover-view>


			</cover-view>
		</map>
		<view style="position: fixed;z-index: 99; top: 20%;left: 20%;">
			示例链接里的代码片段 , 基础库切换成不是1.12.0后 marker 上的自定义气泡 customCallout下的display:'BYCLICK' 点击就不显示了-{{index}}
			
		</view>
		<view class="btn" ref='dome' id="btn">
			<view class="btn-main">
				成都市
			</view>
			<view class="btn-main">

				更多地区
				<br>
				开发中…
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { onReady, onShow } from '@dcloudio/uni-app'
	import { ref, reactive, getCurrentInstance } from 'vue'

	const map = ref()
	const dome = ref()
	const mapHeight = ref()
	const instance = getCurrentInstance();
	let _mapContext : UniApp.MapContext;
	const data = reactive({
		latitude: 30.646291657333,
		longitude: 104.0481414546,
		positions: [
			{
				id: 1,
				latitude: 30.646291657333,
				longitude: 104.0481414546,
			}, {
				id: 2,
				latitude: 30.660144317128,
				longitude: 104.02842579404,
			}
		],
		markers: []
	})

	onReady(() => {
		const { windowHeight } = uni.getSystemInfoSync()

		_mapContext = uni.createMapContext("map");
		const query = uni.createSelectorQuery().in(instance?.ctx);
		query.select('#btn').boundingClientRect(data => {
			mapHeight.value = (windowHeight - data.height)
		}).exec();
		
		_mapContext.initMarkerCluster({
		        enableDefaultStyle: false,
		        zoomOnClick: true,
		        gridSize: 60,
		        complete(res) {
		          console.log('initMarkerCluster', res)
		        }
		      });
		
		      _mapContext.on("markerClusterCreate", (e) => {
		        console.log("markerClusterCreate", e);
		      });
		addMarkers(_mapContext)
	})

	const addMarkers = (maskesFn : UniApp.MapContext) => {


		//const markers = []

		data.positions.forEach((p, i) => data.markers.push(
			Object.assign({}, {
				iconPath: '/static/location.png',
				width: 50,
				height: 50,
				label: {
					width: 50,
					height: 30,
					borderWidth: 1,
					borderRadius: 10,
					x: -25,
					bgColor: '#fff',
					content: `label ${i + 1}`
				},
				customCallout: {
					anchorY: 0,
					anchorX: 0,
					//display: 'BYCLICK'
					display: 'ALWAYS'
				},
			}, p)
		))
return

		try {
			// ...
			console.log('Inside addMarkers');

			maskesFn.addMarkers({
				markers,
				clear: false,
				complete(res) {
					console.log('addMarkers complete', res);
				},
				fail(res) {
					console.log('addMarkers fail', res);
				}
			});
			// ...
		} catch (error) {
			console.log('Error in addMarkers', error);
		}
	}
</script>

<style lang="scss" scoped>
	/* 	uni.getLocation({
			type: 'gcj02',
			success: function (res) {
				
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
				data.latitude = res.latitude;
				data.longitude = res.longitude;
			
			/* 	uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function () {
						console.log('success');
					}
				}); */
	/* 	 uni.chooseLocation({
				 	success: function (res) {
				 		console.log('位置名称：' + res.name);
				 		console.log('详细地址：' + res.address);
				 		console.log('纬度：' + res.latitude);
				 		console.log('经度：' + res.longitude);
				 	}
				 }); 
				

			},
			fail: (r) => {
				console.log(r)
			},
			complete: (r) => {
				console.log(r)
			}
		});
		 */
	.content {
		flex: 1;
	}

	.map {
		flex: 1;
		/* height: 100vh; */
		width: 100vh;
	}

	.btn {
		width: 100%;
		padding: 15px;
		display: flex;
		gap: 10px;


		.btn-main {
			background-color: #ededed;
			width: 100px;
			height: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}

	.customCallout {
  box-sizing: border-box;
  background-color: #fff; 
  border: 1px solid #ccc;
  border-radius: 30px;
  width: 80%;
  max-height: 200px;
  overflow-y: scroll;
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;

	
		.customCallout-content{
			
			  font-size: 14px;
			  white-space: normal;
			overflow-y:scroll;
		}
	}
</style>
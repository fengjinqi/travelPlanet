<template>
	 <view class="content">
	    <map id="map" class="map" style="width: 100%; height: 300px;" :show-location="true" :latitude="data.latitude" :longitude="data.longitude"></map>
	  </view>
</template>

<script lang="ts" setup>
	import { onReady } from '@dcloudio/uni-app'
	import {ref,reactive} from 'vue'
	const _mapContext = ref()
	const data = reactive({
		
			latitude: 39.909,
					longitude: 116.39742,
	})
	onReady(() => {
	//	_mapContext.value = uni.createMapContext("map", this);
		uni.getLocation({
			type: 'gcj02',
			success: function (res) {
				console.log(res)
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
				 }); */
				

			},
			fail: (r) => {
				console.log(r)
			},
			complete: (r) => {
				console.log(r)
			}
		});
	})
</script>

<style>
  .content {
    flex: 1;
  }

  .map {
    flex: 1;
  }
</style>
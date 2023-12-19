/**
 * 创建request请求
 * @returns
 */
import config from '@/config/index'
import cookie from '@/utils/cookie'
class HttpAxios{
	 request = <T = any>(
		url : string, //接口地址
		type : 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT', //请求方式
		data : AnyObject, //请求的参数
		header : any //设置请求的 header
	) : Promise<T> =>
	{
		// 拼接url  config.base后面会讲到
		let apiUrl = config.base + url
		// 这里是获取存在Store中的token，获取方式根据自身项目来
		const token = cookie.get('TOKEN')
		// 全局添加请求头
		let obj = {
			// 获取Store中的token || 获取本地存储的token
			'Authori-zation': (token || ""),
		}
		if (header) {
			// 有无传入header，有则合并
			let headers = Object.assign(header, obj);
			header = headers;
		} else {
			header = obj
		}
		if (data) {
			// 清除无用参数
			Object.keys(data).forEach(key => {
				if (data[key] == null || data[key] == undefined || data[key] === '') {
					delete (data[key]);
				}
			})
		}
	
		return new Promise((resolve, reject) => {
			uni.request({
				url: apiUrl,
				method: type,
				data,
				header,
				success(res) {
					if (res.statusCode == 200) {
						const data : any = res.data;
						if (data.code == 0) {
							// 正常抛出数据
							resolve(data.data as T)
						} else {
						
							// 错误数据
							uni.hideLoading();
	
							uni.showToast({
								title: data.message || "网络请求异常",
								icon: "error",
								duration: 2000
							});
	
							reject(data);
						}
					} else {
						console.log(data)
						uni.hideLoading();
	
						uni.showToast({
							title: "网络请求异常",
							icon: "error",
							duration: 2000
						});
						reject(data)
					}
				},
				fail(err) {
					console.log(err)
					uni.hideLoading();
					uni.showToast({
						title: "网络请求异常",
						icon: "error",
						duration: 2000
					});
					reject(err)
				}
			})
		})
	}
	
}
const request = new HttpAxios()

export default request
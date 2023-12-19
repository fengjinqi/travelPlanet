export default {
	/** 设置缓存
	 * @param {Object} name
	 * @param {Object} value
	 */
	set(name:string,value:any){
		uni.setStorageSync(name,value);
	},
	/** 设置缓存-Json
	 * @param {Object} name
	 * @param {Object} value
	 */
	setJson(name:string,value:any){
		uni.setStorageSync(name,JSON.stringify(value));
	},
	/** 获取缓存
	 * @param {Object} name
	 */
	get(name:string){
		return uni.getStorageSync(name);
	},
	/** 获取缓存-Json
	 * @param {Object} name
	 */
	getJson(name:string){
		const content = uni.getStorageSync(name);
		if(!content){
			return null;
		}
		
		return JSON.parse(content);
	},
	/** 删除指定缓存
	 * @param {Object} name
	 */
	remove(name:string){
		uni.removeStorageSync(name);
	},
	/**
	 * 清空全部缓存
	 */
	clear(){
		uni.clearStorageSync();
	}
};
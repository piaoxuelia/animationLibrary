'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	indexAction() {
		//auto render template file index_index.html
		return this.display();
	}
	async getcateAction() {
		let model = this.model("CATE");
		try {
			let result = await model.select();
			this.success({ "result": result });
		} catch (e) {
			this.fail(102, "未成功");
		}

	}
	async storeAction() {
		let modelTemp = this.model("TEMPLIST");
		let modelList = this.model("LIST");
		
		var toolName = this.get('toolName');
		var url = this.get('url');
		var profile = this.get('profile');
		var cateId = this.get('cateId');
		var email = this.get('email');
		//将得到的数据参数存储到临时的表TEMPLIST中，在此表中等待审核
		try {
			let num = await modelList.where({url:url}).count();
			let num1 = await modelTemp.where({url:url}).count();
			if(!num&&!num1){
				let insertId = await modelTemp.add({
						toolName: toolName,
						cateId:cateId ,
						url: url, 
						profile:profile ,
						email:email
					});
				this.success({ "result":insertId});
			}else{
				this.fail(102, "记录已存在");
			}
			

		} catch (e) {
			this.fail(102, "未成功");
		}
	}
}
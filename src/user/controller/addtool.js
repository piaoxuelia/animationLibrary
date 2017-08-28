'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	async indexAction() {
		//auto render template file index_index.html
		let user = await this.checkAuthor(this);
		if(user){
			this.assign({ 
				page:"addtool",
				title:"添加工具",
				user:user
			})
			return this.display();
		}
		
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
		let modelList = this.model("LIST");
		let coList = this.model("CONNECT");
		
		var toolName = this.get('toolName');
		var url = this.get('url');
		var imgUrl = this.get('imgUrl');
		var profile = this.get('profile');
		var cateId = this.get('cateId');
		var email = this.get('email');




		//将得到的数据参数存储LIST中，获取toolId,并将分类信息存到CONNECT表中 将审核表中相应的记录删除
		try {
			var arrNum = [];
			var arr = cateId.split(',');

			let num = await modelList.where({url:url}).count();

		
			for(var i=0; i<arr.length; i++){
				arrNum[i] =await coList.where({cateId:arr[i]}).max("num");
			}

			if(!num){
				/* 将记录插入到LIST表中 */
				let insertId = await modelList.add({
					toolName: toolName,
					imgUrl:imgUrl,
					url: url, 
					profile:profile,
					email:email
				});

				/* 将记录插入到CONNECT表中 并将默认将 */
				arr.forEach(function(item,i){
					coList.add({
						toolId: insertId,
						cateId:item,
						num:arrNum[i]+1
					});
				})
				this.success({ "result":arrNum});
			}else{
				this.fail(102, "记录已存在");
			}

		} catch (e) {
			this.fail(102, "未成功");
		}
	}
}
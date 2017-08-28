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
			let toolId = this.get('toolId');
			this.assign({ 
				page:"edittool",
				title:"编辑工具",
				toolId:toolId,
				user:user
			})

			return this.display();
		}
	}
	//获取当前工具的信息，返回到客户端进行展示
	async editAction(){
		let modelCate = this.model("CATE");
		let modelList = this.model("LIST");
		let coList = this.model("CONNECT");

		let toolId = this.get('toolId');

		let result={};
		result.cate = await modelCate.select();
		result.listData = await modelList.where({toolId:toolId}).select();
		result.connData = await coList.where({toolId:toolId}).select();

		this.success({ "result": result });
	}

	// 更新工具分类
	async updatecateAction(){
		let coList = this.model("CONNECT");
		let toolId = this.get('toolId');
		let cateId = this.get('cateId');
		let type = this.get('type');

		// type:1 为工具增加分类
		// type:2 在connect 表中删除此工具的此分类
		
		if(type == 1){//添加
			var _num = await coList.where({cateId:cateId}).max("num");
			coList.add({
				toolId: toolId,
				cateId:cateId,
				num:_num+1
			});
		}else if(type == 2){//删除
			coList.where({toolId:toolId,cateId:cateId}).delete();
			this.success({ "result": "tid:"+toolId+"  type:"+ type+"cateId:"+cateId});
		}
	}

	//存储编辑后的信息到list表

	async storeAction() {
		let modelList = this.model("LIST");

		let toolId = this.get('toolId');
		let toolName = this.get('toolName');
		let url = this.get('url');
		let imgUrl = this.get('imgUrl');
		let profile = this.get('profile');
		let email = this.get('email');

		try{
			await modelList.where({toolId:toolId}).update({
				toolName: toolName,
				imgUrl:imgUrl,
				url: url, 
				profile:profile,
				email:email
			});

			this.success({ "result":"更改成功"});
		}catch(e){
			this.fail(102, "未成功");
		}
		

	}
	
}
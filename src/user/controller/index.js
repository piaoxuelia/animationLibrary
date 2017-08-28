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
				page:"user",
				title:"工具编辑",
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

	async getlistAction() {
		let modelLIST = this.model("LIST");
		let modelCATE = this.model("CATE");

		//连表查询然后先按 cateid 排序 然后按num 排序，num:是在某一个分类下的顺序
		
		
		let result = await modelLIST.join({
			CONNECT: { join: "left", on: "toolId, toolId", as: "c" },
			CATE: { join: "right", on: ["CATE.cateId", "c.cateId"] }
		}).alias('d').order('c.cateId ASC,c.num asc').select();

		console.log(modelLIST.getLastSql());

		var _cateid = '';
		var resData = {};
		for(var i =0; i<result.length ; i++){
			if(result[i].cateId === _cateid){
				resData[_cateid].data.push(result[i]);
				continue;
			}else{
				_cateid = result[i].cateId;
				resData[_cateid] = {};
				resData[_cateid].cateName =result[i].cateName;
				resData[_cateid].data = [];
				resData[_cateid].data.push(result[i]);
			}
		}
		this.success({ "result": resData });

	}
	/* 改变工具相应分类下的展示顺序 */
	async setnumAction() {
		
		let coList = this.model("CONNECT");

		var toolData = JSON.parse(this.get('data'));
		try{
			for(var i in toolData){
				var toolId = toolData[i].toolId,
					cateId = toolData[i].cateId,
					num = toolData[i].num;

				await coList.where({toolId:toolId,cateId:cateId}).update({num:num});
			}
			this.success({ "result":"成功"});
		}catch(e){
			this.fail(102, "未成功");
		}
	
	}
	/** 删除相应分类下的工具 
	 *  此操作只能将相应分类下的工具记录删除，不能将此工具的所有记录删除 
	 *  只删除CONNECT表中的记录
	**/
	async dellistAction() {
		if(await this.checkAuthor()){
			let coList = this.model("CONNECT");
			var toolData = JSON.parse(this.get('data'));

			try{
				var toolId = toolData.toolId,
					cateId = toolData.cateId

				await coList.where({toolId:toolId,cateId:cateId}).delete();
				
				this.success({ "result":"删除成功"});
			}catch(e){
				this.fail(102, "删除失败");
			}
		}
	}












	//以下注释掉的代码是最初批量向数据库中插入数据的代码
	// async addAction(data) {
	// 	let model = this.model("CATE");
	// 	var data = this.get('cateall');
	// 	data = JSON.parse(data);


	// 	try {
	// 		for (var i in data) {
	// 			var result = await model.add(data[i]);
	// 			this.success({ "result": result });
	// 		}
	// 	} catch (e) {
	// 		this.fail(102, "未成功");
	// 	}
	// }

	// async listAction(data) {
	// 	let model = this.model("LIST");
	// 	var data = this.get('listdata');
	// 	data = JSON.parse(data);


	// 	try {
	// 		for (var i in data) {
	// 			for (var j in data[i]) {
	// 				var result = await model.add(data[i][j]);
	// 				this.success({ "result": result });
	// 			}
	// 		}
	// 	} catch (e) {
	// 		this.fail(102, "未成功");
	// 	}
	// }

}
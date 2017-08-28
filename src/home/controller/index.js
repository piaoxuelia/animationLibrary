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
		for (var i = 0; i < result.length; i++) {
			if (result[i].cateId === _cateid) {
				resData[_cateid].data.push(result[i]);
				continue;
			} else {
				_cateid = result[i].cateId;
				resData[_cateid] = {};
				resData[_cateid].cateName = result[i].cateName;
				resData[_cateid].data = [];
				resData[_cateid].data.push(result[i]);
			}
		}

		this.success({ "result": resData });

	}

}
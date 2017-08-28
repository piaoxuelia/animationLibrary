'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
	(0, _inherits3.default)(_class, _Base);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
	}

	/**
  * index action
  * @return {Promise} []
  */

	_class.prototype.indexAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var user;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.checkAuthor(this);

						case 2:
							user = _context.sent;

							if (!user) {
								_context.next = 6;
								break;
							}

							this.assign({
								page: "user",
								title: "工具编辑",
								user: user
							});
							return _context.abrupt('return', this.display());

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function indexAction() {
			return ref.apply(this, arguments);
		}

		return indexAction;
	}();

	_class.prototype.getcateAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var model, result;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							model = this.model("CATE");
							_context2.prev = 1;
							_context2.next = 4;
							return model.select();

						case 4:
							result = _context2.sent;

							this.success({ "result": result });
							_context2.next = 11;
							break;

						case 8:
							_context2.prev = 8;
							_context2.t0 = _context2['catch'](1);

							this.fail(102, "未成功");

						case 11:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[1, 8]]);
		}));

		function getcateAction() {
			return ref.apply(this, arguments);
		}

		return getcateAction;
	}();

	_class.prototype.getlistAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var modelLIST, modelCATE, result, _cateid, resData, i;

			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							modelLIST = this.model("LIST");
							modelCATE = this.model("CATE");

							//连表查询然后先按 cateid 排序 然后按num 排序，num:是在某一个分类下的顺序

							_context3.next = 4;
							return modelLIST.join({
								CONNECT: { join: "left", on: "toolId, toolId", as: "c" },
								CATE: { join: "right", on: ["CATE.cateId", "c.cateId"] }
							}).alias('d').order('c.cateId ASC,c.num asc').select();

						case 4:
							result = _context3.sent;


							console.log(modelLIST.getLastSql());

							_cateid = '';
							resData = {};
							i = 0;

						case 9:
							if (!(i < result.length)) {
								_context3.next = 23;
								break;
							}

							if (!(result[i].cateId === _cateid)) {
								_context3.next = 15;
								break;
							}

							resData[_cateid].data.push(result[i]);
							return _context3.abrupt('continue', 20);

						case 15:
							_cateid = result[i].cateId;
							resData[_cateid] = {};
							resData[_cateid].cateName = result[i].cateName;
							resData[_cateid].data = [];
							resData[_cateid].data.push(result[i]);

						case 20:
							i++;
							_context3.next = 9;
							break;

						case 23:
							this.success({ "result": resData });

						case 24:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function getlistAction() {
			return ref.apply(this, arguments);
		}

		return getlistAction;
	}();
	/* 改变工具相应分类下的展示顺序 */


	_class.prototype.setnumAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
			var coList, toolData, i, toolId, cateId, num;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							coList = this.model("CONNECT");
							toolData = JSON.parse(this.get('data'));
							_context4.prev = 2;
							_context4.t0 = _regenerator2.default.keys(toolData);

						case 4:
							if ((_context4.t1 = _context4.t0()).done) {
								_context4.next = 11;
								break;
							}

							i = _context4.t1.value;
							toolId = toolData[i].toolId, cateId = toolData[i].cateId, num = toolData[i].num;
							_context4.next = 9;
							return coList.where({ toolId: toolId, cateId: cateId }).update({ num: num });

						case 9:
							_context4.next = 4;
							break;

						case 11:
							this.success({ "result": "成功" });
							_context4.next = 17;
							break;

						case 14:
							_context4.prev = 14;
							_context4.t2 = _context4['catch'](2);

							this.fail(102, "未成功");

						case 17:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[2, 14]]);
		}));

		function setnumAction() {
			return ref.apply(this, arguments);
		}

		return setnumAction;
	}();
	/** 删除相应分类下的工具 
  *  此操作只能将相应分类下的工具记录删除，不能将此工具的所有记录删除 
  *  只删除CONNECT表中的记录
 **/


	_class.prototype.dellistAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
			var coList, toolData, toolId, cateId;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.next = 2;
							return this.checkAuthor();

						case 2:
							if (!_context5.sent) {
								_context5.next = 15;
								break;
							}

							coList = this.model("CONNECT");
							toolData = JSON.parse(this.get('data'));
							_context5.prev = 5;
							toolId = toolData.toolId, cateId = toolData.cateId;
							_context5.next = 9;
							return coList.where({ toolId: toolId, cateId: cateId }).delete();

						case 9:

							this.success({ "result": "删除成功" });
							_context5.next = 15;
							break;

						case 12:
							_context5.prev = 12;
							_context5.t0 = _context5['catch'](5);

							this.fail(102, "删除失败");

						case 15:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this, [[5, 12]]);
		}));

		function dellistAction() {
			return ref.apply(this, arguments);
		}

		return dellistAction;
	}();

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

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map
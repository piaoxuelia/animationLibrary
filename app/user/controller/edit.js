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
			var user, toolId;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.checkAuthor(this);

						case 2:
							user = _context.sent;

							if (!user) {
								_context.next = 7;
								break;
							}

							toolId = this.get('toolId');

							this.assign({
								page: "edittool",
								title: "编辑工具",
								toolId: toolId,
								user: user
							});

							return _context.abrupt('return', this.display());

						case 7:
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
	//获取当前工具的信息，返回到客户端进行展示


	_class.prototype.editAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var modelCate, modelList, coList, toolId, result;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							modelCate = this.model("CATE");
							modelList = this.model("LIST");
							coList = this.model("CONNECT");
							toolId = this.get('toolId');
							result = {};
							_context2.next = 7;
							return modelCate.select();

						case 7:
							result.cate = _context2.sent;
							_context2.next = 10;
							return modelList.where({ toolId: toolId }).select();

						case 10:
							result.listData = _context2.sent;
							_context2.next = 13;
							return coList.where({ toolId: toolId }).select();

						case 13:
							result.connData = _context2.sent;


							this.success({ "result": result });

						case 15:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function editAction() {
			return ref.apply(this, arguments);
		}

		return editAction;
	}();

	// 更新工具分类


	_class.prototype.updatecateAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var coList, toolId, cateId, type, _num;

			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							coList = this.model("CONNECT");
							toolId = this.get('toolId');
							cateId = this.get('cateId');
							type = this.get('type');

							// type:1 为工具增加分类
							// type:2 在connect 表中删除此工具的此分类

							if (!(type == 1)) {
								_context3.next = 11;
								break;
							}

							_context3.next = 7;
							return coList.where({ cateId: cateId }).max("num");

						case 7:
							_num = _context3.sent;

							coList.add({
								toolId: toolId,
								cateId: cateId,
								num: _num + 1
							});
							_context3.next = 12;
							break;

						case 11:
							if (type == 2) {
								//删除
								coList.where({ toolId: toolId, cateId: cateId }).delete();
								this.success({ "result": "tid:" + toolId + "  type:" + type + "cateId:" + cateId });
							}

						case 12:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function updatecateAction() {
			return ref.apply(this, arguments);
		}

		return updatecateAction;
	}();

	//存储编辑后的信息到list表

	_class.prototype.storeAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
			var modelList, toolId, toolName, url, imgUrl, profile, email;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							modelList = this.model("LIST");
							toolId = this.get('toolId');
							toolName = this.get('toolName');
							url = this.get('url');
							imgUrl = this.get('imgUrl');
							profile = this.get('profile');
							email = this.get('email');
							_context4.prev = 7;
							_context4.next = 10;
							return modelList.where({ toolId: toolId }).update({
								toolName: toolName,
								imgUrl: imgUrl,
								url: url,
								profile: profile,
								email: email
							});

						case 10:

							this.success({ "result": "更改成功" });
							_context4.next = 16;
							break;

						case 13:
							_context4.prev = 13;
							_context4.t0 = _context4['catch'](7);

							this.fail(102, "未成功");

						case 16:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[7, 13]]);
		}));

		function storeAction() {
			return ref.apply(this, arguments);
		}

		return storeAction;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=edit.js.map
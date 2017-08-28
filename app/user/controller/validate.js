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
								page: "validate",
								title: "工具验证",
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

	_class.prototype.getvalidataAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var result, modelCate, modelVali;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							result = {};
							modelCate = this.model("CATE");
							_context2.next = 4;
							return modelCate.select();

						case 4:
							result.cate = _context2.sent;
							modelVali = this.model("TEMPLIST");
							_context2.next = 8;
							return modelVali.select();

						case 8:
							result.list = _context2.sent;

							this.success({ "result": result });

						case 10:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function getvalidataAction() {
			return ref.apply(this, arguments);
		}

		return getvalidataAction;
	}();

	_class.prototype.storeAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
			var _this2 = this;

			var modelTemp, modelList, coList, toolName, url, imgUrl, profile, cateId, email, arrNum, arr, num, i;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							modelTemp = this.model("TEMPLIST");
							modelList = this.model("LIST");
							coList = this.model("CONNECT");
							toolName = this.get('toolName');
							url = this.get('url');
							imgUrl = this.get('imgUrl');
							profile = this.get('profile');
							cateId = this.get('cateId');
							email = this.get('email');

							//将得到的数据参数存储LIST中，获取toolId,并将分类信息存到CONNECT表中 将审核表中相应的记录删除

							_context4.prev = 9;
							arrNum = [];
							arr = cateId.split(',');
							_context4.next = 14;
							return modelList.where({ url: url }).count();

						case 14:
							num = _context4.sent;
							i = 0;

						case 16:
							if (!(i < arr.length)) {
								_context4.next = 23;
								break;
							}

							_context4.next = 19;
							return coList.where({ cateId: arr[i] }).max("num");

						case 19:
							arrNum[i] = _context4.sent;

						case 20:
							i++;
							_context4.next = 16;
							break;

						case 23:
							if (num) {
								_context4.next = 27;
								break;
							}

							return _context4.delegateYield(_regenerator2.default.mark(function _callee3() {
								var insertId, valiItem;
								return _regenerator2.default.wrap(function _callee3$(_context3) {
									while (1) {
										switch (_context3.prev = _context3.next) {
											case 0:
												_context3.next = 2;
												return modelList.add({
													toolName: toolName,
													imgUrl: imgUrl,
													url: url,
													profile: profile,
													email: email
												});

											case 2:
												insertId = _context3.sent;


												/* 将记录插入到CONNECT表中 并将默认将 */
												arr.forEach(function (item, i) {
													coList.add({
														toolId: insertId,
														cateId: item,
														num: arrNum[i] + 1
													});
												});

												valiItem = modelTemp.where({ url: url }).delete();


												_this2.success({ "result": arrNum });

											case 6:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee3, _this2);
							})(), 't0', 25);

						case 25:
							_context4.next = 28;
							break;

						case 27:
							this.fail(102, "记录已存在");

						case 28:
							_context4.next = 33;
							break;

						case 30:
							_context4.prev = 30;
							_context4.t1 = _context4['catch'](9);

							this.fail(102, "未成功");

						case 33:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[9, 30]]);
		}));

		function storeAction() {
			return ref.apply(this, arguments);
		}

		return storeAction;
	}();

	_class.prototype.delAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
			var url, modelTemp, valiItem;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							url = this.get('url');
							modelTemp = this.model("TEMPLIST");

							try {
								valiItem = modelTemp.where({ url: url }).delete();

								this.success({ "result": "删除成功" });
							} catch (e) {
								this.fail(102, "未成功");
							}

						case 3:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		function delAction() {
			return ref.apply(this, arguments);
		}

		return delAction;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=validate.js.map
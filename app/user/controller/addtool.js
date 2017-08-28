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
								page: "addtool",
								title: "添加工具",
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

	_class.prototype.storeAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
			var _this2 = this;

			var modelList, coList, toolName, url, imgUrl, profile, cateId, email, arrNum, arr, num, i;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							modelList = this.model("LIST");
							coList = this.model("CONNECT");
							toolName = this.get('toolName');
							url = this.get('url');
							imgUrl = this.get('imgUrl');
							profile = this.get('profile');
							cateId = this.get('cateId');
							email = this.get('email');

							//将得到的数据参数存储LIST中，获取toolId,并将分类信息存到CONNECT表中 将审核表中相应的记录删除

							_context4.prev = 8;
							arrNum = [];
							arr = cateId.split(',');
							_context4.next = 13;
							return modelList.where({ url: url }).count();

						case 13:
							num = _context4.sent;
							i = 0;

						case 15:
							if (!(i < arr.length)) {
								_context4.next = 22;
								break;
							}

							_context4.next = 18;
							return coList.where({ cateId: arr[i] }).max("num");

						case 18:
							arrNum[i] = _context4.sent;

						case 19:
							i++;
							_context4.next = 15;
							break;

						case 22:
							if (num) {
								_context4.next = 26;
								break;
							}

							return _context4.delegateYield(_regenerator2.default.mark(function _callee3() {
								var insertId;
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
												_this2.success({ "result": arrNum });

											case 5:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee3, _this2);
							})(), 't0', 24);

						case 24:
							_context4.next = 27;
							break;

						case 26:
							this.fail(102, "记录已存在");

						case 27:
							_context4.next = 32;
							break;

						case 29:
							_context4.prev = 29;
							_context4.t1 = _context4['catch'](8);

							this.fail(102, "未成功");

						case 32:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[8, 29]]);
		}));

		function storeAction() {
			return ref.apply(this, arguments);
		}

		return storeAction;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=addtool.js.map
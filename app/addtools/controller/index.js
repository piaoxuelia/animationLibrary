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

	_class.prototype.indexAction = function indexAction() {
		//auto render template file index_index.html
		return this.display();
	};

	_class.prototype.getcateAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var model, result;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							model = this.model("CATE");
							_context.prev = 1;
							_context.next = 4;
							return model.select();

						case 4:
							result = _context.sent;

							this.success({ "result": result });
							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](1);

							this.fail(102, "未成功");

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[1, 8]]);
		}));

		function getcateAction() {
			return ref.apply(this, arguments);
		}

		return getcateAction;
	}();

	_class.prototype.storeAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var modelTemp, modelList, toolName, url, profile, cateId, email, num, num1, insertId;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							modelTemp = this.model("TEMPLIST");
							modelList = this.model("LIST");
							toolName = this.get('toolName');
							url = this.get('url');
							profile = this.get('profile');
							cateId = this.get('cateId');
							email = this.get('email');
							//将得到的数据参数存储到临时的表TEMPLIST中，在此表中等待审核

							_context2.prev = 7;
							_context2.next = 10;
							return modelList.where({ url: url }).count();

						case 10:
							num = _context2.sent;
							_context2.next = 13;
							return modelTemp.where({ url: url }).count();

						case 13:
							num1 = _context2.sent;

							if (!(!num && !num1)) {
								_context2.next = 21;
								break;
							}

							_context2.next = 17;
							return modelTemp.add({
								toolName: toolName,
								cateId: cateId,
								url: url,
								profile: profile,
								email: email
							});

						case 17:
							insertId = _context2.sent;

							this.success({ "result": insertId });
							_context2.next = 22;
							break;

						case 21:
							this.fail(102, "记录已存在");

						case 22:
							_context2.next = 27;
							break;

						case 24:
							_context2.prev = 24;
							_context2.t0 = _context2['catch'](7);

							this.fail(102, "未成功");

						case 27:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[7, 24]]);
		}));

		function storeAction() {
			return ref.apply(this, arguments);
		}

		return storeAction;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map
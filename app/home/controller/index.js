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

	_class.prototype.getlistAction = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var modelLIST, modelCATE, result, _cateid, resData, i;

			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							modelLIST = this.model("LIST");
							modelCATE = this.model("CATE");

							//连表查询然后先按 cateid 排序 然后按num 排序，num:是在某一个分类下的顺序

							_context2.next = 4;
							return modelLIST.join({
								CONNECT: { join: "left", on: "toolId, toolId", as: "c" },
								CATE: { join: "right", on: ["CATE.cateId", "c.cateId"] }
							}).alias('d').order('c.cateId ASC,c.num asc').select();

						case 4:
							result = _context2.sent;


							console.log(modelLIST.getLastSql());

							_cateid = '';
							resData = {};
							i = 0;

						case 9:
							if (!(i < result.length)) {
								_context2.next = 23;
								break;
							}

							if (!(result[i].cateId === _cateid)) {
								_context2.next = 15;
								break;
							}

							resData[_cateid].data.push(result[i]);
							return _context2.abrupt('continue', 20);

						case 15:
							_cateid = result[i].cateId;
							resData[_cateid] = {};
							resData[_cateid].cateName = result[i].cateName;
							resData[_cateid].data = [];
							resData[_cateid].data.push(result[i]);

						case 20:
							i++;
							_context2.next = 9;
							break;

						case 23:

							this.success({ "result": resData });

						case 24:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function getlistAction() {
			return ref.apply(this, arguments);
		}

		return getlistAction;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map
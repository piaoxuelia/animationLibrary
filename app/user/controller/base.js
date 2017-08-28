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

var _uuap = require('uuap');

var _uuap2 = _interopRequireDefault(_uuap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var administrator = ["luyuewen", "liuyingying", "huangjiaolong"];

var _class = function (_think$controller$bas) {
	(0, _inherits3.default)(_class, _think$controller$bas);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
	}

	/**
  * some base method in here
  */

	_class.prototype.checkAuthor = function () {
		var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
			var userInfo, logout, corrLogout;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _uuap2.default.getUserInfo(this.http.req, this.http.res);

						case 2:
							userInfo = _context.sent;
							logout = data.get("logout");


							if (logout) {
								corrLogout = _uuap2.default.logout(data.http.req, data.http.res);

								if (corrLogout) {
									this.redirect("/");
								}
							}

							if (!(administrator.indexOf(userInfo.userName) !== -1)) {
								_context.next = 9;
								break;
							}

							return _context.abrupt('return', userInfo);

						case 9:
							this.redirect("/");

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function checkAuthor(_x) {
			return ref.apply(this, arguments);
		}

		return checkAuthor;
	}();

	return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=base.js.map
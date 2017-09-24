'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BayAlt = function BayAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M145.608 114.043l2.947-3.83c.894-1.209 5.782-9.929 5.782-19.19 0-3.604-2.142-10.015-6.84-15.576-2.843-3.364-8.91-9.008-17.618-9.008H95.948v11.268h31.882c6.513 0 12.43 4.473 14.394 10.876a15.634 15.634 0 0 1-3.773 15.686c-1.308 1.309-6.478 5.835-10.62 9.434 4.384 4.162 10.312 9.8 11.773 11.26 4.824 4.824 3.899 13.431 1.145 17.235-2.23 3.079-6.194 7.172-14.852 7.172H82.93V95.634h12.292v41.442h30.674c3.129 0 3.963-.827 4.715-1.84.143-.49.167-1.365.054-1.824-2.289-2.254-11.491-10.982-16.214-15.453l-4.943-4.677 5.154-4.443c5.131-4.423 13.771-11.935 15.098-13.263.054-.055 1.331-1.363.71-3.392-.441-1.436-1.662-2.185-2.64-2.185H72.387v70.554h52.882c12.717 0 21.755-4.952 26.866-14.716 7.095-13.552-3.371-27.897-3.482-28.036l-3.045-3.758z' }),
    _react2.default.createElement('path', { d: 'M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.495 113.494c62.68 0 113.494-50.813 113.494-113.494S176.175 0 113.494 0zm49.533 151.536c-4.428 8.457-11.011 14.511-19.571 17.995-5.4 2.198-11.52 3.313-18.187 3.313H60.094V77.706h23.56V54.145h46.226c10.135 0 19.726 4.748 27.009 13.367 6.008 7.114 9.742 16.124 9.742 23.51 0 9.432-3.397 17.909-5.954 22.772a48.003 48.003 0 0 1 4.436 10.216c2.946 9.769 2.226 19.288-2.086 27.526z' })
  );
};

BayAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BayAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BayAlt;
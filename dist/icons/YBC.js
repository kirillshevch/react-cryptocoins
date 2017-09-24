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

var Ybc = function Ybc(props) {
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
    _react2.default.createElement('path', { d: 'M113.448.122C50.862.122.123 50.861.123 113.451c0 62.588 50.739 113.326 113.326 113.326 62.59 0 113.329-50.738 113.329-113.326C226.777 50.861 176.039.122 113.448.122zm17.643 183.634a72.546 72.546 0 0 1-17.642 2.167c-40.025 0-72.471-32.448-72.471-72.472 0-30.076 18.319-55.869 44.405-66.837v84.169l10.76 10.734h34.948v42.239zm10.426-3.471V96.118l-10.763-10.734H95.809V43.143a72.634 72.634 0 0 1 17.64-2.167c40.026 0 72.474 32.448 72.474 72.475 0 30.072-18.32 55.866-44.406 66.834z' })
  );
};

Ybc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ybc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ybc;
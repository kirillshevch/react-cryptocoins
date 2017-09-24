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

var Nlg = function Nlg(props) {
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
    _react2.default.createElement('path', { d: 'M113.319 101.071v24.349h87.831c-5.901 43.238-42.974 76.556-87.831 76.556-48.964 0-88.657-39.691-88.657-88.657 0-48.963 39.693-88.657 88.657-88.657 24.496 0 46.67 9.936 62.714 25.996l17.69-17.188C173.195 12.801 144.753 0 113.319 0 50.735 0 0 50.734 0 113.318c0 62.584 50.735 113.319 113.319 113.319 62.583 0 113.318-50.735 113.318-113.319 0-4.14-.228-8.225-.659-12.248H113.319z' })
  );
};

Nlg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Nlg.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Nlg;
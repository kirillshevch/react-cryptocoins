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

var Vrc = function Vrc(props) {
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
    _react2.default.createElement('path', { d: 'M113.619 0C50.868 0 0 50.866 0 113.619s50.868 113.619 113.619 113.619c62.753 0 113.619-50.866 113.619-113.619S176.372 0 113.619 0zm0 79.677c6.03 0 10.921 4.89 10.921 10.92 0 6.029-4.891 10.918-10.921 10.918S102.7 96.627 102.7 90.598c0-6.031 4.889-10.921 10.919-10.921zm49.477 73.797c-6.03 0-10.922-4.89-10.922-10.919 0-6.03 4.892-10.921 10.922-10.921 6.028 0 10.918 4.891 10.918 10.921 0 6.03-4.889 10.919-10.918 10.919zm-49.477 45.241L44.741 64.558H80.74l33.119 67.918 32.4-67.918h36.239l-68.879 134.157z' })
  );
};

Vrc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Vrc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Vrc;
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

var Slg = function Slg(props) {
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
    _react2.default.createElement('path', { d: 'M213.435 68.76c-.002-.042-.008-.083-.008-.126a7.162 7.162 0 0 0-.141-1.25l-.002-.002a6.936 6.936 0 0 0-1.06-2.491 7.137 7.137 0 0 0-.85-1.022l-.051-.048a6.937 6.937 0 0 0-1.049-.842.14.14 0 0 1-.018-.017L113.582 0 16.53 62.955l.001.006a6.985 6.985 0 0 0-3.192 5.867v89.124c0 .026.005.053.005.078 0 .044.006.092.006.137.014.422.058.837.143 1.237l.006.02a6.938 6.938 0 0 0 1.039 2.445c.01.015.021.027.029.04.249.363.531.7.843 1.011.019.019.04.034.058.053.32.311.668.59 1.041.833.008.007.014.015.023.021l97.051 62.949 96.676-62.956v-.004a6.996 6.996 0 0 0 3.18-5.864V68.829c-.002-.024-.004-.046-.004-.069zM27.344 79.948l148.258 71.003H27.344V79.948zm23.832-4.116h148.256v71.003L51.176 75.832zm131.677-14.005H44.004l69.564-45.124 69.285 45.124zm-69.285 148.245l-69.564-45.116h138.848l-69.284 45.116z' })
  );
};

Slg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Slg.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Slg;
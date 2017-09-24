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

var NeosAlt = function NeosAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 595.279 595.281',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M297.619.001C133.249.001 0 133.25 0 297.618 0 461.991 133.249 595.24 297.619 595.24c164.37 0 297.62-133.249 297.62-297.622C595.239 133.25 461.989.001 297.619.001zm30.4 161.702v26.361l-45.637-26.361h45.637zm-57.998 0l57.998 33.504v34.216l-117.129-67.72h59.131zm-78.458 270.975h-29.631V161.703h29.631v270.975zm35.815 0h-29.631V161.703l130.273 74.864v34.222l-100.642-58.146v220.035zm39.841 0v-26.361l45.634 26.361h-45.634zm57.998 0l-57.998-33.505v-34.217l117.129 67.722h-59.131zm72.272 0l-130.27-74.864v-34.228l100.642 58.151V161.703h29.628v270.975zm35.814 0h-29.628V161.703h29.628v270.975z' })
  );
};

NeosAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

NeosAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = NeosAlt;
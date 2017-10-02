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

var EosAlt = function EosAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M109.68 71.552V50.04L82.223 85.792l6.504 18.86zm-26.182 41.361l-5.002-14.501-9.543 37.477 14.544-22.976zm22.398 41.523v.001h15.074l13.923-40.858L113.5 79.785l-21.588 34.103zm51.922-18.909l-9.676-37.152-4.844 14.215zm-13.454-49.741L117.32 50.148v21.404l20.733 32.753zm-57.681 36.363l-20.439 32.288h31.574zm26.796 54.272l4.899-14.377h-9.858zM74.07 162.044l32.585 18.016-6.213-18.016zm46.228 18.042l32.632-18.042h-26.484zm8.741-25.649h31.716l-20.617-32.572z' }),
    _react2.default.createElement('path', { d: 'M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zm56.034 161.566l-54.18 29.957a3.84 3.84 0 0 1-3.71 0l-54.179-29.957a3.8 3.8 0 0 1-1.849-4.261l18.625-73.14c.127-.499.354-.968.668-1.376l35.555-46.297a3.83 3.83 0 0 1 6.083.016l35.132 46.298c.303.399.524.854.65 1.338l19.047 73.141a3.797 3.797 0 0 1-1.842 4.281z' })
  );
};

EosAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

EosAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = EosAlt;
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

var Eos = function Eos(props) {
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
    _react2.default.createElement('path', { d: 'M197.356 177.182L169.76 71.209a5.52 5.52 0 0 0-.942-1.938l-50.901-67.08a5.548 5.548 0 0 0-8.814-.024L57.588 69.245a5.481 5.481 0 0 0-.968 1.994L29.635 177.21a5.502 5.502 0 0 0 2.679 6.172l78.498 43.403a5.563 5.563 0 0 0 5.375 0l78.499-43.403a5.503 5.503 0 0 0 2.67-6.2zm-19.644-31.527l-21.038-33.234 7.018-20.596 14.02 53.83zM119.035 21.952l39.184 51.635-9.145 26.831-30.039-47.455V21.952zm-5.535 42.94l30.995 48.963-20.172 59.198h-21.839v-.003l-20.262-58.748 31.278-49.41zm-5.535-43.097v31.167L77.607 100.92l-9.423-27.326 39.781-51.799zM62.784 91.88l7.247 21.01h-.001l-21.072 33.289L62.784 91.88zm11.861 34.392l16.134 46.78H45.032l29.613-46.78zm-18.273 57.803h38.21l9.001 26.102-47.211-26.102zm57.097 20.83l-7.185-20.83h14.283l-7.098 20.83zm9.881 5.309l8.908-26.139h38.371l-47.279 26.139zm12.665-37.161l16.08-47.192 29.872 47.192h-45.952z' })
  );
};

Eos.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Eos.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Eos;
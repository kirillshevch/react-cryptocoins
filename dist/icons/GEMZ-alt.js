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

var GemzAlt = function GemzAlt(props) {
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
    _react2.default.createElement('path', { d: 'M61.354 106.638H164.52L113.339 31.45zm51.75 100.725l51.982-93.719H60.621zM109.103 25.26H66.04c0 .109.013.214.003.324L59.398 97.15l49.705-71.89zm8.495 0l48.842 71.749-6.449-71.433c-.009-.107.005-.209.005-.315h-42.398zm55.803 87.98l-51.038 92.082 102.217-103.04zm-121.848-7.363l7.486-80.617h-4.365L-.096 94.63zm-49.545-3.619l101.933 103.027-51.562-92.058zm172.267 3.631l52.507-11.242-55.64-69.387h-4.146z' })
  );
};

GemzAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GemzAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GemzAlt;
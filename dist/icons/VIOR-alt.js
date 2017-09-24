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

var ViorAlt = function ViorAlt(props) {
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
    _react2.default.createElement('path', { d: 'M149.205 73.092h-18.732l-17.055 45.487-17.053-45.487H77.631l35.787 86.96z' }),
    _react2.default.createElement('path', { d: 'M25.952 149.171c0-41.624 34.529-86.975 87.76-86.975a87.855 87.855 0 0 1 74.493 41.011 77.346 77.346 0 0 0 4.69-26.571c0-32.539-20.127-60.503-48.701-72.343A113.337 113.337 0 0 0 113.417.061C50.814.059.059 50.811.059 113.418c0 37.402 18.12 70.572 46.055 91.217-12.59-15.054-20.162-34.383-20.162-55.464z' }),
    _react2.default.createElement('path', { d: 'M184.236 24.906c10.817 14.459 17.233 32.347 17.233 51.729 0 48.056-41.442 86.974-87.757 86.974a87.867 87.867 0 0 1-74.49-40.997 77.303 77.303 0 0 0-4.696 26.559c0 36.507 25.335 67.266 59.51 75.948a114 114 0 0 0 19.381 1.658c62.608 0 113.359-50.753 113.359-113.359.001-35.812-16.609-67.74-42.54-88.512z' })
  );
};

ViorAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ViorAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ViorAlt;
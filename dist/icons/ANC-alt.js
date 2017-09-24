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

var AncAlt = function AncAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389 62.622 0 113.388-50.766 113.388-113.389C226.777 50.766 176.011 0 113.389 0zm-.001 197.385c-23.071 0-43.966-9.303-59.146-24.359l9.05-16.431h100.349l8.979 16.347c-15.188 15.106-36.118 24.443-59.232 24.443zm33.081-72.189l8.099 14.808H72.339l8.072-14.808h66.058zm-57.012-16.592l23.931-43.893 24.007 43.893H89.457zm94.495 50.363L113.388 29.39 42.744 158.844c-8.448-13.104-13.354-28.707-13.354-45.456 0-46.391 37.607-83.999 83.998-83.999 46.391 0 83.997 37.607 83.997 83.999 0 16.803-4.935 32.451-13.433 45.579z' })
  );
};

AncAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

AncAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = AncAlt;
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

var GdcAlt = function GdcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M98.626 87.318c-5.299 0-9.609 4.312-9.609 9.608 0 5.3 4.311 9.611 9.609 9.611s9.608-4.311 9.608-9.611c.001-5.297-4.31-9.608-9.608-9.608zm29.526-10.133c5.299 0 9.609-4.31 9.609-9.609 0-5.298-4.311-9.61-9.609-9.61s-9.609 4.312-9.609 9.61c0 5.299 4.31 9.609 9.609 9.609zm0 62.275c5.299 0 9.609-4.311 9.609-9.61 0-5.299-4.311-9.609-9.609-9.609s-9.609 4.311-9.609 9.609c0 5.299 4.31 9.61 9.609 9.61z' }),
    _react2.default.createElement('path', { d: 'M113.389 0C50.767 0 0 50.767 0 113.389c0 62.622 50.767 113.388 113.389 113.388 62.623 0 113.388-50.767 113.388-113.388C226.777 50.767 176.011 0 113.389 0zM62.461 63.382h48.208c1.897-7.903 9.006-13.802 17.483-13.802 9.922 0 17.994 8.073 17.994 17.996s-8.072 17.995-17.994 17.995c-8.477 0-15.585-5.899-17.483-13.802H70.847v53.887h39.822c1.897-7.902 9.006-13.802 17.483-13.802 9.922 0 17.994 8.073 17.994 17.995 0 9.923-8.072 17.996-17.994 17.996-8.477 0-15.585-5.899-17.483-13.803H62.461v-70.66zm101.857 100.012h-48.209c-1.898 7.903-9.006 13.803-17.483 13.803-9.923 0-17.995-8.073-17.995-17.997 0-9.922 8.072-17.995 17.995-17.995 8.477 0 15.584 5.898 17.483 13.802h39.822V101.12h-39.822c-1.898 7.904-9.006 13.803-17.483 13.803-9.923 0-17.995-8.073-17.995-17.997 0-9.922 8.072-17.994 17.995-17.994 8.477 0 15.584 5.897 17.483 13.802h48.209v70.66z' }),
    _react2.default.createElement('path', { d: 'M98.626 149.592c-5.299 0-9.609 4.311-9.609 9.608 0 5.301 4.311 9.611 9.609 9.611s9.608-4.311 9.608-9.611c.001-5.298-4.31-9.608-9.608-9.608z' })
  );
};

GdcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GdcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GdcAlt;
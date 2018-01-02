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

var GntAlt = function GntAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.766 44.195c-14.18 0-25.716 11.829-25.716 26.369s11.536 26.369 25.716 26.369c14.18 0 25.716-11.829 25.716-26.369s-11.537-26.369-25.716-26.369z' }),
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm33.946 70.564c0 17.52-12.979 31.999-29.648 33.991v23.474c16.669 1.992 29.648 16.471 29.648 33.991 0 18.877-15.064 34.234-33.581 34.234-18.516 0-33.581-15.357-33.581-34.234 0-17.52 12.979-31.999 29.648-33.991v-23.474c-16.669-1.992-29.648-16.471-29.648-33.991 0-18.877 15.064-34.234 33.581-34.234 7.72 0 14.835 2.677 20.514 7.158l18.845-18.845 5.561 5.562-18.833 18.833a34.478 34.478 0 0 1 7.494 21.526z' }),
    _react2.default.createElement('path', { d: 'M88.05 162.02c0 14.54 11.536 26.369 25.716 26.369 14.18 0 25.716-11.829 25.716-26.369s-11.536-26.369-25.716-26.369c-14.18.001-25.716 11.83-25.716 26.369z' })
  );
};

GntAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GntAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GntAlt;
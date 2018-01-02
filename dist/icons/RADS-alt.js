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

var RadsAlt = function RadsAlt(props) {
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
    _react2.default.createElement('circle', { cx: '146.51', cy: '145.51', r: '8.137' }),
    _react2.default.createElement('circle', { cx: '82.29', cy: '145.51', r: '8.137' }),
    _react2.default.createElement('path', { d: 'M114.4 0C51.8 0 1 50.8 1 113.4s50.8 113.4 113.4 113.4S227.8 176 227.8 113.4 177 0 114.4 0zM82.29 54.3c14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99zm26.991 91.21c0 14.906-12.084 26.99-26.99 26.99-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99 20.561 0 37.229-16.668 37.229-37.229 0-14.906 12.084-26.99 26.99-26.99 14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99-20.561 0-37.229 16.668-37.229 37.229zm37.229 26.99c-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99 14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99z' }),
    _react2.default.createElement('circle', { cx: '146.51', cy: '81.29', r: '8.137' }),
    _react2.default.createElement('circle', { cx: '82.29', cy: '81.29', r: '8.137' })
  );
};

RadsAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

RadsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = RadsAlt;
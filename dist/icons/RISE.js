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

var Rise = function Rise(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('circle', { 'class': 'st0', cx: '73.8', cy: '17.9', r: '17.9' }),
    _react2.default.createElement('circle', { 'class': 'st0', cx: '153.2', cy: '208.9', r: '17.9' }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M71.9 96.7c3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.1-5.4 8.5-15.6 3.1-22.8C162.2.5 152-.9 144.8 4.5L62 67.5c-7 5.5-8.4 15.7-3 22.8 3.2 4.2 8.1 6.4 12.9 6.4zm0 64.5c3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.1-5.4 8.5-15.6 3.1-22.8-5.4-7.1-15.6-8.5-22.8-3.1L62 132c-7.1 5.4-8.5 15.6-3.1 22.8 3.3 4.2 8.2 6.4 13 6.4zm95.7-23.4c-5.4-7.1-15.6-8.5-22.8-3.1l-82.8 63c-7.1 5.4-8.5 15.6-3.1 22.8 3.2 4.2 8 6.4 12.9 6.4 3.4 0 6.9-1.1 9.8-3.3l82.8-63c7.3-5.5 8.7-15.7 3.2-22.8z'
    })
  );
};

Rise.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Rise;
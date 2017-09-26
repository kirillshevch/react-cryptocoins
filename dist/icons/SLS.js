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

var Sls = function Sls(props) {
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
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M120.4 226.6c8.2-3.4 15.9-8 21.3-14.1 17-19.5 23.8-54.9-4-75-14.4-10.4-33.7-15.1-54.2-24.7s-32.2-25-35.6-45.5C45.1 50.4 46.2 27.8 69.1 9 28.5 26.2 0 66.5 0 113.4 0 176 50.8 226.8 113.4 226.8c2.4 0 4.7-.1 7-.2z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M164.1 11.9l4 43.6-6.6 1.9s-8.7-30.7-27-42-52.1-11.6-62 13.2c-9.9 24.8 1.8 50.5 38.4 60.5s70.3 22.1 67.9 74.7c-1.8 39.4-24.5 53.5-40.3 60.1 50.6-11.4 88.4-56.6 88.4-110.6-.1-44.3-25.6-82.8-62.8-101.4z'
    })
  );
};

Sls.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sls.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Sls;
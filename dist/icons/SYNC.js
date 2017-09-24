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

var Sync = function Sync(props) {
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
    _react2.default.createElement('path', { d: 'M94.466 103.013l38.213 30.797v-9.555L94.466 93.459z' }),
    _react2.default.createElement('path', { d: 'M113.533.289C50.99.289.289 50.99.289 113.534c0 62.542 50.701 113.243 113.244 113.243s113.244-50.701 113.244-113.243C226.777 50.99 176.076.289 113.533.289zm.637 184.438c-40.111 0-56.982-32.115-56.982-56.102V98.846l36.995 29.779H70.908c0 18.227 15.008 42.381 41.569 42.381 31.167 0 43.194-25.646 43.194-42.381l12.907 10.569c.001 9.251-14.77 45.533-54.408 45.533zm32.637-63.419s2.032 24.086-13.924 33.945c-15.956 9.858-27.441 6.505-36.893 1.32-9.452-5.183-14.229-16.599-14.229-18.801h15.45s3.454 8.843 14.227 9.856c10.774 1.018 14.636-4.927 14.636-4.927L80.542 105.96s-1.627-21.851 11.281-32.115c12.907-10.266 26.525-10.468 37.809-4.371 11.279 6.098 15.956 19.513 15.956 19.513H130.24s-3.557-7.928-13.415-9.554c-9.859-1.625-15.552 4.878-15.552 4.878l45.534 36.997zm23.071 6.911L132.884 98.44h23.273c0-18.227-15.008-42.381-41.566-42.381-31.169 0-43.196 25.646-43.196 42.381L58.488 87.871c0-9.25 14.771-45.533 54.408-45.533 40.112 0 56.982 32.116 56.982 56.103v29.778z' })
  );
};

Sync.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sync.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Sync;
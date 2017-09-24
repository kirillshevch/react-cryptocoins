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

var Xpm = function Xpm(props) {
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
    _react2.default.createElement('path', { d: 'M113.379 0C50.761 0 0 50.761 0 113.377c0 62.617 50.761 113.379 113.379 113.379 62.616 0 113.377-50.763 113.377-113.379C226.757 50.761 175.995 0 113.379 0zm53.008 113.145c0 29.39-22.699 39.381-41.806 39.381v7.662h14.742v10.377h-14.742v11.933h-23.053v-11.933H87.433v-10.377h14.063v-7.759c-6.111 0-41.125-1.456-41.125-41.418V62.903h22.891v49.952c0 20.854 18.331 20.659 18.331 20.659V62.903h22.988v70.611s18.914 1.066 18.914-20.949V62.903h22.892v50.242z' })
  );
};

Xpm.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Xpm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Xpm;
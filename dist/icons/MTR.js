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

var Mtr = function Mtr(props) {
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
    _react2.default.createElement('path', { d: 'M113.364 0C50.755 0 0 50.755 0 113.363c0 62.61 50.755 113.365 113.364 113.365s113.364-50.755 113.364-113.365C226.728 50.755 175.973 0 113.364 0zM79.862 162.818H65.921v-41.28l13.941-4.292v45.572zm23.792 0H89.712v-48.629l13.942-4.293v52.922zm23.79 0h-13.941V106.88l13.941-4.293v60.231zm33.018-68.667l-1.874-6.659-7.352 2.263v73.063h-13.941v-68.77L45.528 122.31l-1.25-4.022 110.356-48.136-1.596-6.244 29.411 3.747-21.987 26.496z' })
  );
};

Mtr.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Mtr.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Mtr;
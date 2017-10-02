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

var DctAlt = function DctAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zM78.523 148H66.4v-13.468h12.124c11.107 0 17.277-3.14 24.109-14.592l.134.287c2.219 4.729 4.553 9.043 7.105 12.888C102.785 142.165 93.491 148 78.523 148zM180 148h-32.457c-19.027 0-29.745-9.746-39.359-30.257-9.514-20.294-15.67-25.275-29.659-25.275H60.431V148H47V79h31.525c23.503 0 33.016 14.39 41.97 33.024s14.923 22.877 27.048 22.877H180V148zm0-55.902h-32.457c-10.155 0-15.992 2.977-22.88 14.89-2.274-4.568-4.729-9.02-7.5-13.095C124.843 83.845 134.127 79 147.543 79H180v13.098z' })
  );
};

DctAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DctAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = DctAlt;
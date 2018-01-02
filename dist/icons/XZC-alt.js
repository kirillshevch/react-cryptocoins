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

var XzcAlt = function XzcAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 250 250',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: color
    }, otherProps),
    _react2.default.createElement(
      'title',
      null,
      'ZCoin (XZC) Flat-alt'
    ),
    _react2.default.createElement('path', {
      d: 'M125 250C55.964 250 0 194.036 0 125S55.964 0 125 0s125 55.964 125 125-55.964 125-125 125zm22.71-98.77h28.244v24.704h-84.86L196.438 70.5c3.435-3.438 4.453-8.659 2.671-13.116C197.201 52.93 192.875 50 187.913 50H62.087C55.344 50 50 55.348 50 62.097v89.134l52.29-52.335H74.046v-24.83h84.733L53.562 179.5c-3.435 3.438-4.453 8.659-2.671 13.116C52.799 197.07 57.125 200 62.087 200h125.826c6.616 0 12.087-5.348 12.087-12.097V98.896l-52.29 52.335z',
      fillRule: 'evenodd'
    })
  );
};

XzcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XzcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XzcAlt;
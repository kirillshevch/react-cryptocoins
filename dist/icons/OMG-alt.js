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

var OmgAlt = function OmgAlt(props) {
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
    _react2.default.createElement('path', { d: 'M156.542 70.243c-11.727 0-21.234 9.515-21.234 21.253s9.508 21.253 21.234 21.253c11.719-.02 21.215-9.524 21.234-21.253 0-11.738-9.505-21.253-21.234-21.253zm-65.048 42.495c11.728 0 21.235-9.516 21.235-21.253h.011c-.02-11.734-9.523-21.238-21.246-21.253-11.727 0-21.234 9.515-21.234 21.253s9.507 21.253 21.234 21.253zm0 22.535c-11.727 0-21.234 9.515-21.234 21.253 0 11.736 9.507 21.252 21.234 21.252 11.719-.02 21.215-9.524 21.235-21.252 0-11.738-9.507-21.253-21.235-21.253z' }),
    _react2.default.createElement('path', { d: 'M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227c62.685 0 113.5-50.816 113.5-113.5S176.185 0 113.5 0zM61.611 85.437C64.495 71.212 76.994 60.991 91.494 61h30.451v9.222h-8.637c10.118 10.399 11.509 26.492 3.331 38.479-8.176 11.985-23.662 16.543-37.02 10.896s-20.89-19.937-18.008-34.16zM91.496 187c-16.821 0-30.459-13.649-30.459-30.485 0-16.837 13.636-30.484 30.457-30.484h.002c16.822 0 30.458 13.647 30.458 30.484 0 16.836-13.636 30.485-30.458 30.485zm65.046-65.03c-16.82 0-30.459-13.647-30.459-30.484C126.083 74.65 139.722 61 156.542 61 173.364 61 187 74.649 187 91.485c0 16.837-13.636 30.485-30.458 30.485z' })
  );
};

OmgAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

OmgAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = OmgAlt;
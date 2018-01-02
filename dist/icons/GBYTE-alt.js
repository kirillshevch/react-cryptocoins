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

var GbyteAlt = function GbyteAlt(props) {
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
    _react2.default.createElement('path', {
      d: 'M125 250C55.964 250 0 194.036 0 125S55.964 0 125 0s125 55.964 125 125-55.964 125-125 125zm0-50c41.421 0 75-33.579 75-75s-33.579-75-75-75-75 33.579-75 75 33.579 75 75 75zm0-12c-34.794 0-63-28.206-63-63s28.206-63 63-63 63 28.206 63 63-28.206 63-63 63z',
      fillRule: 'evenodd'
    })
  );
};

GbyteAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GbyteAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GbyteAlt;
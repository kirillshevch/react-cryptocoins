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

var VrcAlt = function VrcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M167.272 2.863l-53.384 111.909L59.315 2.863H0l113.49 221.052L226.984 2.863z' }),
    _react2.default.createElement('path', { d: 'M113.49 63.762c9.934 0 17.993-8.058 17.993-17.994s-8.059-17.994-17.993-17.994c-9.935 0-17.99 8.058-17.99 17.994s8.055 17.994 17.99 17.994zm81.524 49.626c-9.934 0-17.994 8.057-17.994 17.99 0 9.938 8.061 17.995 17.994 17.995 9.938 0 17.991-8.057 17.991-17.995.001-9.933-8.053-17.99-17.991-17.99z' })
  );
};

VrcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

VrcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = VrcAlt;
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

var PpcAlt = function PpcAlt(props) {
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
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8c62.6 0 113.4-50.8 113.4-113.4C226.8 50.8 176 0 113.4 0zm30.1 174.6s5.3-17.8 3-33.8c-2.4-16-16.7-35.4-27.5-44.1C108.3 87.9 87.5 78 87.5 78s18 13.8 24.3 20.4c6.2 6.6 14.8 17.5 18.9 31.8 4 14.3 3.4 39.2-4.9 44.4-8.3 5.2-30-3.8-37.2-9.9s-16.5-16-19.2-36.6c-2.7-20.6-2-68.7-2-68.7s38.6.2 67.8 18.6c29.2 18.4 31.9 33 31.9 56.6 0 23.7-23.6 40-23.6 40z'
    })
  );
};

PpcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PpcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = PpcAlt;
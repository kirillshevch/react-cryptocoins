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

var EmcAlt = function EmcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M82.959 61.139L52.558 113.41l30.401 52.273h60.406l30.803-52.418-31.318-52.126H82.959zm58.774 80.191H84.666v-12.407h44.658V96.675h-10.248v22.941h-34.41v-12.411h21.999v-10.53H84.666V84.264h57.067v57.066z' }),
    _react2.default.createElement('path', { d: 'M113.411 0C50.776 0 0 50.776 0 113.41c0 62.635 50.776 113.411 113.411 113.411s113.41-50.775 113.41-113.411C226.821 50.776 176.046 0 113.411 0zm38.346 180.348H74.525L35.592 113.41l38.934-66.938h76.621l40.084 66.709-39.474 67.167z' })
  );
};

EmcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

EmcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = EmcAlt;
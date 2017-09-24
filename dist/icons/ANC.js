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

var Anc = function Anc(props) {
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
    _react2.default.createElement('path', { d: 'M181.224 171.715H45.763l-12.218 22.179c20.493 20.325 48.7 32.884 79.843 32.884 31.201 0 59.456-12.604 79.958-32.996l-12.122-22.067zM113.388 0C50.765 0 0 50.767 0 113.389c0 22.61 6.621 43.674 18.026 61.362L113.388 0zm113.389 113.389C226.777 50.767 176.011 0 113.388 0l95.254 174.916c11.471-17.722 18.135-38.845 18.135-61.527zm-145.694-6.457h64.712L113.388 47.68zm-23.109 42.386h111.001l-10.93-19.989H68.871z' })
  );
};

Anc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Anc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Anc;
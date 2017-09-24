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

var XrpAlt = function XrpAlt(props) {
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
    _react2.default.createElement('path', { d: 'M196.224 139.515c-7.59-4.162-15.848-6.09-23.981-6.026l.069-.039c-11.158.128-20.311-8.55-20.442-19.38-.129-10.686 8.565-19.467 19.505-19.832v-.005l-.02-.01c8.276-.04 16.649-2.145 24.277-6.547 22.81-13.165 30.309-41.787 16.749-63.93-13.563-22.144-43.047-29.423-65.857-16.258-22.81 13.164-30.308 41.787-16.747 63.93 5.648 9.227 2.526 21.152-6.978 26.638-9.369 5.407-21.433 2.534-27.188-6.383l-.005.002v.025c-4.147-6.951-10.189-12.956-17.913-17.192-23.103-12.672-52.417-4.764-65.47 17.667-13.053 22.426-4.903 50.882 18.201 63.553 23.105 12.672 52.415 4.763 65.469-17.667.079-.135.149-.275.226-.411v.033l.005.002c5.545-9.054 17.555-12.191 27.047-6.985 9.628 5.281 13.021 17.136 7.583 26.48-13.055 22.431-4.904 50.885 18.199 63.555 23.104 12.673 52.417 4.763 65.47-17.667 13.051-22.428 4.904-50.881-18.199-63.553z' })
  );
};

XrpAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XrpAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XrpAlt;
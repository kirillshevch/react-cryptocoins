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

var Dgb = function Dgb(props) {
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
    _react2.default.createElement('path', { d: 'M149.813 48.964l4.634-43.015-16.612-1.79-4.491 41.648c-4.358-.814-8.843-1.643-13.359-2.474l4.478-41.545L107.848 0l-4.345 40.318a11875.008 11875.008 0 0 0-53.631-9.615L27.303 56.206s91.163 14.365 109.338 18.175c18.177 3.81 31.064 27.254 17.586 50.124-13.48 22.867-37.604 44.24-81.49 41.335l41.919-82.959-39.572-7.327-53.352 100.835s20.807 6.227 54.705 6.894l-4.102 38.052 16.614 1.792 4.307-39.988c4.418-.162 8.986-.419 13.713-.796l-4.648 43.151 16.613 1.793 5.061-46.976c52.526-9.621 79.256-57.37 80.946-79.843 1.732-23.088-17.881-43.87-55.128-51.504z' })
  );
};

Dgb.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dgb.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dgb;
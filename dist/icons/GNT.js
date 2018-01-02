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

var Gnt = function Gnt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M160.287 60.688c0-10.771-3.717-20.67-9.904-28.448l24.89-24.89-7.35-7.35-24.905 24.905c-7.505-5.923-16.908-9.46-27.111-9.46-24.471 0-44.38 20.296-44.38 45.243 0 23.154 17.153 42.289 39.183 44.923v31.024c-22.03 2.633-39.183 21.769-39.183 44.923 0 24.947 19.909 45.243 44.38 45.243s44.38-20.296 44.38-45.243c0-23.154-17.153-42.289-39.183-44.923v-31.024c22.03-2.633 39.183-21.769 39.183-44.923zm-78.366 0c0-19.216 15.246-34.849 33.986-34.849s33.986 15.633 33.986 34.849-15.246 34.849-33.986 34.849-33.986-15.633-33.986-34.849zm67.972 120.869c0 19.216-15.246 34.849-33.986 34.849s-33.986-15.633-33.986-34.849 15.246-34.849 33.986-34.849 33.986 15.633 33.986 34.849z' })
  );
};

Gnt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gnt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Gnt;
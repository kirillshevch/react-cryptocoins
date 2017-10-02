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

var XtzAlt = function XtzAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zm56.797 178.054c-3.156 6.377-7.857 11.146-14.294 14.303-6.249 3.096-13.18 4.644-20.604 4.644-10.892 0-18.873-2.6-23.823-7.863-5.013-5.2-7.488-10.835-7.488-16.902 0-2.229.434-4.086 1.3-5.572s2.042-2.724 3.59-3.591c1.484-.867 3.341-1.3 5.568-1.3 2.227 0 4.084.433 5.569 1.3 1.484.867 2.722 2.043 3.589 3.591.866 1.548 1.299 3.343 1.299 5.572 0 2.663-.619 4.83-1.918 6.501-1.299 1.672-2.785 2.786-4.517 3.281 1.484 2.105 3.897 3.592 7.115 4.459 3.219.865 6.497 1.361 9.777 1.361 4.517 0 8.601-1.239 12.252-3.652 3.649-2.416 6.373-6.068 8.106-10.773 1.731-4.768 2.599-10.154 2.599-16.222 0-6.563-.929-12.197-2.847-16.842-1.856-4.643-4.642-8.11-8.293-10.4-3.649-2.291-7.61-3.406-11.817-3.406-2.785 0-6.25 1.177-10.458 3.468l-7.673 3.838v-3.715l34.467-45.939h-47.709v47.735c0 3.962.867 7.183 2.599 9.782 1.733 2.539 4.395 3.839 7.982 3.839 2.785 0 5.446-.929 7.983-2.786a28.794 28.794 0 0 0 6.62-6.811c.247-.495.495-.928.866-1.176s.743-.372 1.114-.372c.619 0 1.423.31 2.289.929.805.929 1.238 1.981 1.238 3.22a20.884 20.884 0 0 1-.434 2.414c-1.979 4.396-4.703 7.802-8.168 10.092-3.465 2.354-7.302 3.469-11.51 3.469-10.333 0-17.45-2.043-21.41-6.068-3.96-4.086-5.939-9.597-5.939-16.531V84.192H63v-8.916h24.381V55.092l-5.57-5.572V45h16.15l6.063 3.158v27.18l62.993-.186 6.249 6.254-38.612 38.634c2.353-.928 4.766-1.486 7.303-1.733 4.208 0 8.91 1.301 14.17 3.962 5.26 2.663 9.282 6.255 12.128 10.773 2.847 4.582 4.703 8.916 5.507 13.126.867 4.21 1.238 7.925 1.238 11.146 0 7.429-1.547 14.363-4.703 20.74z' })
  );
};

XtzAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XtzAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XtzAlt;
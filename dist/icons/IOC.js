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

var Ioc = function Ioc(props) {
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
    _react2.default.createElement('path', { d: 'M113.494 0C50.813 0 0 50.813 0 113.494c0 62.68 50.813 113.494 113.494 113.494s113.494-50.813 113.494-113.494S176.175 0 113.494 0zM89.335 72.212c-14.162 8.305-23.677 23.679-23.677 41.282 0 17.606 9.515 32.976 23.677 41.283v28.351c-28.83-10.003-49.528-37.4-49.528-69.633 0-32.235 20.698-59.63 49.528-69.631v28.348zm40.105 113.236a73.886 73.886 0 0 1-15.945 1.735c-5.477 0-10.81-.602-15.946-1.735V90.724s6.162-3.745 15.946-3.745c9.782 0 15.945 3.745 15.945 3.745v94.724zm0-117.058a47.717 47.717 0 0 0-15.945-2.732c-5.594 0-10.958.969-15.946 2.732V41.542a73.937 73.937 0 0 1 15.946-1.735c5.475 0 10.81.603 15.945 1.735V68.39zm8.215 114.738v-28.351c14.161-8.307 23.677-23.677 23.677-41.283 0-17.603-9.516-32.978-23.677-41.282V43.863c28.83 10.001 49.527 37.396 49.527 69.631 0 32.233-20.697 59.631-49.527 69.634z' })
  );
};

Ioc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ioc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ioc;
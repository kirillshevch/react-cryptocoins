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

var IfcAlt = function IfcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M174.257 166.804c-26.777 0-46.1-15.938-61.738-32.363-16.191 16.875-34.902 32.363-60.293 32.363C18.304 166.804 0 139.008 0 112.853c0-26.279 17.94-52.881 52.226-52.881 25.959 0 44.537 15.818 60.473 32.806 16.381-17.069 35.426-32.806 61.559-32.806 34.485 0 53.093 27.792 53.093 53.94-.002 26.285-18.239 52.892-53.094 52.892zm-42.559-53.129c14.46 15.362 26.598 24.954 42.559 24.954 18.392 0 24.917-13.314 24.917-24.717 0-9.569-5.247-25.764-24.917-25.764-15.985 0-29.262 11.466-42.559 25.527zM52.225 88.148c-22.89 0-24.05 20.579-24.05 24.705 0 9.575 5.065 25.776 24.05 25.776 15.271 0 28.248-11.273 41.307-25.1-13.196-14.317-25.613-25.381-41.307-25.381z' })
  );
};

IfcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

IfcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = IfcAlt;
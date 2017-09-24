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

var TxAlt = function TxAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.395 34.301c-43.558 0-78.997 35.437-78.997 78.997 0 43.559 35.439 78.996 78.997 78.996 43.559 0 78.995-35.438 78.995-78.996 0-43.56-35.436-78.997-78.995-78.997zm0 152.009c-40.261 0-73.014-32.753-73.014-73.013 0-40.259 32.753-73.012 73.014-73.012 40.259 0 73.013 32.753 73.013 73.012 0 40.26-32.754 73.013-73.013 73.013z' }),
    _react2.default.createElement('path', { d: 'M172.488 114.839c.013-.513.02-1.025.02-1.541 0-24.801-15.354-46.082-37.055-54.84-3.244-9.048-11.895-15.521-22.058-15.521-10.165 0-18.813 6.472-22.059 15.521-21.7 8.758-37.053 30.04-37.053 54.84 0 .299.007.596.011.894-5.178 4.297-8.477 10.78-8.477 18.036 0 12.939 10.49 23.43 23.43 23.43.945 0 1.873-.062 2.787-.17 10.669 10.459 25.275 16.924 41.361 16.924 16.051 0 30.624-6.435 41.288-16.853.692.063 1.396.099 2.104.099 12.94 0 23.429-10.49 23.429-23.43 0-6.902-2.982-13.103-7.728-17.389zm-35.662-48.473c0-.47-.02-.935-.045-1.397 17.317 8.414 29.453 25.868 30.255 46.186a23.334 23.334 0 0 0-10.249-2.357c-.801 0-1.595.04-2.376.12-1.421-13.402-9.29-24.899-20.436-31.345a23.313 23.313 0 0 0 2.851-11.207zm-23.431-17.08c9.433 0 17.08 7.646 17.08 17.081 0 9.432-7.647 17.081-17.08 17.081-9.435 0-17.081-7.649-17.081-17.081.001-9.435 7.647-17.081 17.081-17.081zM90.01 64.969a23.33 23.33 0 0 0 2.804 12.603c-11.17 6.459-19.051 17.997-20.445 31.439a23.375 23.375 0 0 0-12.607 1.792c.927-20.17 13.03-37.467 30.248-45.834zm-20.763 84.337c-9.432 0-17.08-7.646-17.08-17.079s7.648-17.08 17.08-17.08c9.434 0 17.081 7.647 17.081 17.08s-7.647 17.079-17.081 17.079zm44.148 17.688c-13.425 0-25.705-4.966-35.129-13.138a23.537 23.537 0 0 0 9.967-7.906c6.968 5.384 15.694 8.598 25.162 8.598a41.048 41.048 0 0 0 24.681-8.219 23.496 23.496 0 0 0 10.214 7.731c-9.393 8.054-21.581 12.934-34.895 12.934zm43.392-17.688c-9.434 0-17.08-7.646-17.08-17.079s7.646-17.08 17.08-17.08c9.433 0 17.08 7.647 17.08 17.08s-7.648 17.079-17.08 17.079z' }),
    _react2.default.createElement('path', { d: 'M113.395 0C50.769 0 0 50.769 0 113.395c0 62.627 50.769 113.396 113.396 113.396s113.395-50.769 113.395-113.396C226.79 50.769 176.022 0 113.395 0zm0 197.674c-46.524 0-84.375-37.851-84.375-84.376 0-46.526 37.851-84.375 84.375-84.375s84.375 37.85 84.375 84.375-37.85 84.376-84.375 84.376z' })
  );
};

TxAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

TxAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = TxAlt;
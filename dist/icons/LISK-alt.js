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

var LiskAlt = function LiskAlt(props) {
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
    _react2.default.createElement('path', { d: 'M143.148 153.784l-10.263 8.212-10.758 2.781-7.911 4.159 2.253 9.107-1.258 2.807v4.149l5.311-2.806 21.859-10.334 13.818-7.585.912-10.256-4.184-6.926zm-42.271 11.412l-19.355-11.015-8.842-7.206-3.077 5.816.621 12.088 8.047 3.459 1.699 1.322 20.068 9.809 1.895.288 9.883 5.437.912.039v-4.915l1.125-2.51-2.123-8.582z' }),
    _react2.default.createElement('path', { d: 'M113.388 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389s113.389-50.766 113.389-113.389C226.777 50.766 176.011 0 113.388 0zm6.026 136.148l7.278-13.169 20.191 1.418-1.906 20.868-6.329 1.189-.366 1.928-6.423.184-2.844 3.853-7.523 1.102-2.568 2.845-3.395-1.651-2.477 4.127-.731-3.539 7.093-19.155zm-8.911 16.913h-.662l-4.129 1.928-1.926-4.771-5.139-2.019-1.651.644-.733 1.926-2.385-.735-4.037 2.112-1.926-3.212-7.982-4.006-.493-11.858 18.831-8.277 8.125-16.039 10.558 26.89-6.451 17.417zm16.191-32.572l-1.328-2.051 5.534-13.386v-6.906l11.092-15.138 11.654-4.084-2.521 24.78v14.588l-1.101 1.926-1.836 1.782-21.494-1.511zM141.4 63.246l3.763 7.155 7.508 6.232-11.197 3.925-6.275-5.259 1.093-8.387-9.614-9.237-5.355-13.62L141.4 63.246zm-24.528-23.541l7.692 19.386 9.103 8.745-1.108 8.494 6.97 5.84-11.113 15.165v7.225l-5.842 14.135 1.969 3.042-6.069 10.982-10.713-27.281-1.394-16.548 14.156-10.164 1.242-7.446-5.361-13.865-.075-18.005.543.295zm-6.572-2.148l1.927-.917 1.608.077.086 21.167 5.282 13.659-.963 5.765-13.382 9.608-35.082-11.519 40.524-37.84zm-6.399 51.657l1.37 16.26-8.814 17.404-18.436 8.102-1.575-5.076.643-6.146-8.08-41.999 34.892 11.455zm57.013 78.14l-16.342 8.963-21.877 10.343-6.971 3.685-5.29-.24-10.118-5.569-1.772-.267-21.217-10.372-1.603-1.246-10.302-4.431-.848-16.539 4.983-9.426 6.684-2.47.216 5.215-1.561.576 8.035 6.55 19.086 10.861 10.671 3.947 8.538-4.488 10.523-2.722 9.958-7.963 8.957-6.133-2.137-1.013.482-5.271 7.063 3.352 6.129 10.142-1.287 14.516z' })
  );
};

LiskAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

LiskAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = LiskAlt;
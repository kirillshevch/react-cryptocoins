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

var KoreAlt = function KoreAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.375-.032C50.744-.032-.028 50.742-.028 113.368c0 62.632 50.772 113.409 113.403 113.409 62.63 0 113.402-50.776 113.402-113.409 0-62.626-50.772-113.4-113.402-113.4zm64.8 113.4c0 20.784-9.813 39.24-25.027 51.092l-7.443-11.805c11.337-9.336 18.584-23.452 18.584-39.288 0-16.974-8.332-31.975-21.104-41.223l9.521-10.22c15.467 11.844 25.469 30.462 25.469 51.444zm-45.737-29.687c9.774 6.274 16.266 17.207 16.266 29.688 0 10.278-4.396 19.511-11.402 25.958l-22.885-36.302 18.021-19.344zm16.989-57.326L94.643 84.291l7.766-57.469H76.218c11.4-4.903 23.959-7.628 37.157-7.628 12.772.001 24.944 2.553 36.052 7.161zM55.952 143.39a64.435 64.435 0 0 1-7.377-30.022c0-17.056 6.618-32.551 17.396-44.12L55.952 143.39zm-36.753-30.022c0-36.922 21.26-68.862 52.199-84.297l-1.831 13.548c-23.659 14.675-39.419 40.864-39.419 70.75 0 21.847 8.449 41.691 22.22 56.535l-1.837 13.594c-19.228-17.244-31.332-42.269-31.332-70.13zm42.132 78.486h18.78l9.835-72.774.805.098 45.82 72.677h28.85c-14.913 9.911-32.797 15.696-52.045 15.696-19.245 0-37.136-5.786-52.045-15.697zm107.555-2.425l-5.858-9.296c20.366-15.166 33.573-39.416 33.573-66.765 0-26.303-12.217-49.74-31.273-64.99l7.49-8.039c21.191 17.267 34.73 43.563 34.73 73.029.001 31.249-15.228 58.93-38.662 76.061z' })
  );
};

KoreAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

KoreAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = KoreAlt;
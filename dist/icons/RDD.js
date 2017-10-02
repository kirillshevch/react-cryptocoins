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

var Rdd = function Rdd(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M167.1 57.1c7.4 7.4 13.4 15.5 17.7 21.8h1.2c22.5 0 40.8-17.2 40.8-38.5S208.6 1.9 186 1.9c-22 0-40 16.5-40.7 37.1 5.9 4.2 14 10.3 21.8 18.1zm-97.4 161c7.4 2.8 15.1 4.8 23.1 5.9L84 205.5l-14.3 12.6zm53.9-153.4l-6-55.4c-3.1-.3-6.3-.4-9.6-.4-37.7 0-70.8 19.3-90.2 48.5l17 35.4 88.8-28.1zM85.4 198.5l48.2-42.6-9.5-86.8-87.4 27.7z' }),
    _react2.default.createElement('path', { d: 'M211.8 86.6c-.7-2.2-1.4-4.5-2.2-6.7-3.3 1.8-6.8 3.3-10.5 4.3.9 1.8 1.6 3.2 2 4.2.6 1.3.1 2.8-1.1 3.6l-7.2 5c-.5.4-1.1.5-1.7.5-.2 0-.4 0-.7-.1-.8-.2-1.5-.7-2-1.4-3.4-6-12.9-21.3-26.2-34.6C148.8 48 134.7 39 129.3 35.8c-1.3-.7-1.8-2.3-1.3-3.6l2.7-7.3c.3-.8.9-1.4 1.7-1.8.8-.3 1.6-.3 2.4 0 1.4.6 3.3 1.5 5.7 2.9 1.3-3.7 3.1-7.1 5.3-10.3-7.6-2.8-15.5-4.8-23.8-5.9l15.5 142.6 74.3-65.8zM87.3 202.5l10.6 22.1c3.4.3 6.8.5 10.2.5 11.3 0 22.2-1.7 32.5-5l-6.4-59.1-46.9 41.5zm50.7-44.9l6.6 61.1c41.7-15 71.5-54.9 71.5-101.7 0-8.9-1.1-17.6-3.1-25.8l-75 66.4zM15.2 61.7C7.7 74.3 2.7 88.5.8 103.7l29.9-9.5-15.5-32.5zm17.4 36.4L.4 108.3c-.2 2.9-.4 5.8-.4 8.7 0 44.5 26.9 82.7 65.3 99.3L82 201.5 32.6 98.1z' })
  );
};

Rdd.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Rdd;
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

var NlgAlt = function NlgAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.271 0C50.713 0 0 50.713 0 113.271s50.713 113.271 113.271 113.271c62.557 0 113.271-50.714 113.271-113.271C226.542 50.713 175.828 0 113.271 0zm0 198.755c-47.211 0-85.483-38.272-85.483-85.483 0-47.211 38.272-85.482 85.483-85.482 23.713 0 45.168 9.656 60.653 25.249l-13.346 12.965c-12.102-12.115-28.829-19.611-47.308-19.611-36.937 0-66.879 29.944-66.879 66.879 0 36.938 29.943 66.88 66.879 66.88 33.838 0 61.804-25.134 66.256-57.751H113.27v-18.367h84.985c.325 3.034.497 6.116.497 9.238.002 47.21-38.271 85.483-85.481 85.483z' })
  );
};

NlgAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

NlgAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = NlgAlt;
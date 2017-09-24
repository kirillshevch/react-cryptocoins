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

var BtcdAlt = function BtcdAlt(props) {
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
    _react2.default.createElement('path', { d: 'M21.139 32.3S49.405.17 106.178.17c56.772 0 114.753 53.873 114.753 116.445 0 62.57-49.766 110.162-103.64 110.162-53.875 0-110.285-38.896-110.285-101.224 0-62.33 54.841-88.181 86.368-87.454 32.605.75 64.865 27.177 68.61 57.013 3.272 26.077-11.434 45.984-18.037 52.104-6.604 6.118-25.124 14.495-41.552 10.146-16.429-4.349-24.158-17.235-25.608-24.001-1.45-6.764-2.401-22.482 10.759-30.042 13.158-7.563 22.097 1.86 23.946 6.529 1.851 4.67-.808 11.597-5.959 12.805-5.153 1.209-9.743-.649-12.483-2.983 0 0-.401 11.257 10.59 13.19 10.993 1.933 17.818-4.349 21.019-9.301 3.201-4.953 9.18-21.139-5.073-36.178C105.332 72.343 80.51 73.43 66.437 83.82c-14.071 10.387-28.306 29.575-22.347 57.598 5.962 28.025 31.486 54.12 69.457 54.44 37.971.321 80.489-29.952 84.033-80.045 3.542-50.09-30.764-85.521-55.404-95.829-24.643-10.31-45.895-14.527-72.477-9.347S29.113 27.064 21.139 32.3z' })
  );
};

BtcdAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BtcdAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BtcdAlt;
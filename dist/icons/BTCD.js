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

var Btcd = function Btcd(props) {
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
    _react2.default.createElement('path', { d: 'M113.395.011C50.775.011.012 50.774.012 113.394c0 62.619 50.764 113.383 113.383 113.383 62.618 0 113.382-50.764 113.382-113.383C226.777 50.775 176.013.011 113.395.011zm4.576 190.879c-36.836 0-75.408-26.596-75.408-69.213 0-42.621 37.497-60.296 59.055-59.799 22.295.512 44.352 18.583 46.914 38.984 2.238 17.83-7.818 31.442-12.334 35.627-4.514 4.182-17.178 9.91-28.41 6.937-11.235-2.973-16.52-11.784-17.512-16.411-.991-4.624-1.642-15.372 7.357-20.542 8.996-5.17 15.108 1.272 16.374 4.464 1.265 3.194-.552 7.931-4.076 8.757-3.522.826-6.662-.445-8.535-2.041 0 0-.274 7.696 7.242 9.019 7.516 1.321 12.182-2.973 14.371-6.359 2.19-3.387 6.277-14.455-3.47-24.737-9.745-10.283-26.717-9.541-36.341-2.436-9.621 7.104-19.354 20.223-15.28 39.383 4.077 19.164 21.53 37.005 47.492 37.225 25.962.22 55.036-20.479 57.461-54.731 2.42-34.25-21.036-58.477-37.885-65.525-16.85-7.049-31.38-9.934-49.557-6.391-18.176 3.542-27.752 11.231-33.205 14.813 0 0 19.329-21.969 58.147-21.969 38.819 0 78.464 36.835 78.464 79.62.002 42.782-34.025 75.325-70.864 75.325z' })
  );
};

Btcd.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Btcd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Btcd;
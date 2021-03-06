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

var Qrk = function Qrk(props) {
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
    _react2.default.createElement('path', { d: 'M113.377.023C50.76.023 0 50.784 0 113.4s50.76 113.377 113.377 113.377S226.754 176.016 226.754 113.4 175.993.023 113.377.023zm59.232 113.057c-3.191 1.842-6.588 2.984-10.021 3.535-.003.036-.011.073-.015.11-8.356.717-16.246 5.343-20.771 13.151-4.627 7.979-4.631 17.367-.85 25.071 1.118 3.103 1.768 6.428 1.768 9.908 0 16.206-13.137 29.35-29.339 29.35-16.209 0-29.347-13.144-29.347-29.35 0-3.667.706-7.166 1.936-10.402-.031-.018-.058-.048-.087-.067 3.578-7.602 3.518-16.769-.986-24.607-4.598-7.996-12.726-12.697-21.292-13.272-3.242-.583-6.445-1.682-9.462-3.418-14.036-8.104-18.849-26.054-10.745-40.085 8.103-14.037 26.052-18.842 40.087-10.741 3.188 1.84 5.87 4.208 8.063 6.903l.026-.011c4.809 6.879 12.772 11.392 21.806 11.392 9.025 0 16.993-4.513 21.801-11.392.004.004.012.004.015.008 2.194-2.698 4.877-5.066 8.063-6.907 14.044-8.104 31.993-3.295 40.091 10.74 8.103 14.033 3.292 31.98-10.741 40.084z' }),
    _react2.default.createElement('path', { d: 'M113.381 91.58c-12.054 0-21.821 9.767-21.821 21.816 0 12.05 9.767 21.823 21.821 21.823 12.045 0 21.82-9.772 21.82-21.823 0-12.049-9.774-21.816-21.82-21.816z' })
  );
};

Qrk.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Qrk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Qrk;
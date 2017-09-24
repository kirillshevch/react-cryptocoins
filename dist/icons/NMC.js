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

var Nmc = function Nmc(props) {
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
    _react2.default.createElement('path', { d: 'M86.591 87.017l49.202 67.616 4.357-13.777-49.903-68.741z' }),
    _react2.default.createElement('path', { d: 'M113.584 0C50.852 0 0 50.854 0 113.585s50.852 113.583 113.584 113.583c62.729 0 113.583-50.853 113.583-113.583S176.313 0 113.584 0zm44.35 158.43c-1.581 6.008-5.691 11.278-10.489 13.441-4.006 1.803-15.972 1.457-15.972 1.457L81.708 104.87s-12.785 47.752-14.444 53.56c-2.425 8.484-6.431 10.908-10.437 13.122-4.007 2.216-16.763 1.776-16.763 1.776S66.35 77.316 68.598 68.741c2.25-8.574 7.627-12.477 11.633-13.951 4.007-1.477 15.077-.844 15.077-.844l49.658 68.004 14.602-53.718s1.951-6.854 7.643-11.176c5.694-4.323 18.979-3.244 18.979-3.244s-26.674 98.607-28.256 104.618z' })
  );
};

Nmc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Nmc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Nmc;
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

var Vnl = function Vnl(props) {
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
    _react2.default.createElement('path', { d: 'M220.837 82.343H194.1l17.598-48.948h-37.563c-8.453 0-20.896 5.633-24.649 15.963-3.757 10.329-34.747 96.021-34.747 96.021S83.045 57.341 80.227 49.594c-2.816-7.748-10.798-16.199-24.415-16.199H18.014l17.619 48.948H6.628c-5.634 0-7.218 3.875-5.81 7.572 1.408 3.697 4.988 12.518 6.574 16.215 1.583 3.698 4.166 4.913 7.863 4.913h30.708l3.613 10.039H22.944c-5.634 0-7.219 3.872-5.81 7.57 1.407 3.697 4.988 12.518 6.573 16.214 1.585 3.698 4.167 4.915 7.865 4.915h28.335l14.216 39.498s13.852 10.33 40.731 10.33c26.882 0 40.97-10.8 40.97-10.8l14.031-39.028h26.039c3.697 0 6.28-1.217 7.865-4.915 1.584-3.696 5.165-12.517 6.572-16.214 1.409-3.698-.174-7.57-5.811-7.57h-24.348l3.605-10.039h28.432c3.697 0 6.28-1.215 7.865-4.913 1.583-3.697 5.165-12.518 6.574-16.215 1.409-3.696-.177-7.572-5.811-7.572z' })
  );
};

Vnl.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Vnl.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Vnl;
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

var XemAlt = function XemAlt(props) {
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
    _react2.default.createElement('path', { d: 'M78.6 106.173c.496-.27.938-.521 1.376-.792 15.509-9.309 24.78-25.579 24.857-43.568l-.002-.136c0-24.766 12.935-46.864 33.7-58.891a234.48 234.48 0 0 0-25.167-1.37c-38.646 0-77.097 9.6-111.201 27.76C.558 30.03.448 30.217.325 30.434c-.268.463-.345.634-.321 1.471a236.574 236.574 0 0 0 4.699 40.272 236.944 236.944 0 0 0 2.028 8.924c7.849 18.838 26.752 31.479 47.11 31.479 8.668 0 17.231-2.216 24.759-6.407zM139.541 120.942a34.435 34.435 0 0 0-1.2-.704l-.469-.271c-7.336-4.057-15.862-6.252-24.488-6.252-8.671 0-17.201 2.195-24.669 6.354-.513.319-1.191.715-1.869 1.082-10.016 5.57-21.439 8.522-33.004 8.522-11.689 0-23.277-3.117-33.5-8.91 18.95 42.441 50.367 79.015 89.329 103.742.933.596 1.578.855 3.852.855 2.059 0 2.56-.208 3.57-.846a236.294 236.294 0 0 0 30.049-22.641 235.178 235.178 0 0 0 6.766-6.265c6.745-8.873 10.457-19.835 10.457-30.899-.002-17.833-9.513-34.604-24.824-43.767zM226.444 30.431c-.121-.208-.231-.4-1.838-1.256a236.18 236.18 0 0 0-35.429-15.295 237.211 237.211 0 0 0-8.469-2.676 51.714 51.714 0 0 0-7.798-.6c-27.901 0-50.641 22.532-50.979 50.356v.653c.008 17.994 9.207 34.302 24.616 43.628l.224.137c.471.255 1.063.593 1.617.93 20.194 12.09 32.823 34.165 33.062 57.717 27.873-38.406 43.886-84.932 45.31-132.138.023-.832-.04-.978-.316-1.456z' })
  );
};

XemAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XemAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XemAlt;
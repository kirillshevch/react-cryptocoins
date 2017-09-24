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

var NmcAlt = function NmcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M197.326 25.747c-8.835 6.71-11.862 17.344-11.862 17.344l-22.663 83.367L85.736 20.92s-17.179-.981-23.398 1.309c-6.218 2.292-14.562 8.347-18.054 21.654C40.794 57.19 0 206.195 0 206.195s19.796.682 26.016-2.756c6.217-3.436 12.433-7.198 16.196-20.369 2.576-9.013 22.417-83.119 22.417-83.119l77.23 106.244s18.572.539 24.787-2.263c7.446-3.355 13.826-11.537 16.28-20.862 2.455-9.327 43.851-162.358 43.851-162.358s-20.614-1.673-29.451 5.035zm-48.759 151.434L72.21 72.243l5.67-23.125 77.449 106.681-6.762 21.382z' })
  );
};

NmcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

NmcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = NmcAlt;
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

var Rby = function Rby(props) {
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
    _react2.default.createElement('path', { d: 'M90.828 205.09c-41.115-10.168-71.603-47.289-71.603-91.545s30.487-81.377 71.603-91.546V2.278C39.004 12.801 0 58.618 0 113.544S39.004 214.288 90.828 224.81v-19.72zm15.324-185.549c2.442-.189 4.903-.315 7.393-.315 3.769 0 7.484.226 11.137.655V.55C121.016.192 117.303 0 113.544 0c-2.487 0-4.946.108-7.393.267v19.274z' }),
    _react2.default.createElement('path', { d: 'M140.006 3.133v19.874c27.52 8.035 49.837 28.262 60.692 54.453h-21.613c-12.739-23.085-37.309-38.729-65.541-38.729-41.318 0-74.813 33.497-74.813 74.813s33.496 74.813 74.813 74.813c31.203 0 57.932-19.107 69.156-46.253h20.75c-9.464 29.813-33.337 53.206-63.444 61.994v19.857c49.941-11.928 87.083-56.82 87.083-110.412 0-53.589-37.142-98.483-87.083-110.41zm-8.778 159.033l-21.873-31.069H72.854V112.01h42.77c10.449 0 14.211-6.546 14.211-14.35 0-7.801-4.736-14.907-15.324-14.907H72.855V64.922h43.885c13.933 0 35.944 6.13 35.944 32.043s-19.506 31.068-19.506 31.068l25.078 34.133h-27.028z' }),
    _react2.default.createElement('path', { d: 'M124.681 207.204a95.446 95.446 0 0 1-11.137.659c-2.49 0-4.951-.126-7.393-.315v19.274c2.446.159 4.906.267 7.393.267 3.759 0 7.472-.192 11.137-.551v-19.334z' })
  );
};

Rby.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rby.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Rby;
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

var XaiAlt = function XaiAlt(props) {
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
    _react2.default.createElement('path', { d: 'M44.149 7.611l14.093 14.093-14.094 14.094-14.093-14.093zm83.787 8.373L113.845 1.891 62.042 53.692l14.099 14.091zm-20.978 82.611l84.5-84.5L177.369 0 92.856 84.509zM219.16 43.847L205.065 57.94l-14.094-14.094 14.093-14.093zm-60.177 31.985l51.8 51.798 14.095-14.091-51.804-51.805zm-16.725 16.717l-14.087 14.1 84.5 84.502 14.095-14.091zm40.668 126.283l-14.097-14.095 14.093-14.095 14.097 14.094zm-83.789-8.356l14.092 14.093 51.802-51.802-14.098-14.09zm20.98-82.611l-84.501 84.499 14.091 14.096 84.51-84.509zM7.921 182.613l14.092-14.096 14.095 14.09-14.092 14.097zm60.169-31.986L16.293 98.829 2.198 112.921l51.803 51.805zm30.814-30.817l-84.502-84.5L.307 49.401l84.509 84.509z' })
  );
};

XaiAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

XaiAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = XaiAlt;
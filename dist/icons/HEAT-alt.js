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

var HeatAlt = function HeatAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm-12.841 40.621h25.683l1.271 51.711H99.287l1.272-51.711zM72.152 156.099c-15.524-.194-27.435-13.921-25.372-29.359l5.614-42.004c1.797-13.443 13.001-23.548 26.441-24.106l-6.683 95.469zm24.827 30.08l1.753-71.289h29.335l1.753 71.289H96.979zm57.669-30.08l-6.683-95.468c13.439.558 24.644 10.662 26.441 24.106l5.614 42.004c2.063 15.437-9.848 29.164-25.372 29.358z' })
  );
};

HeatAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

HeatAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = HeatAlt;
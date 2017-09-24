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

var PotAlt = function PotAlt(props) {
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
    _react2.default.createElement('path', { d: 'M128.394.015H46.13l-11.131 57.2H11.212L6.07 84.422h23.633L2 226.777h40.489l15.858-82.157h60.407c29.135 0 96.617-5.73 105.019-74.887C231.619 5.144 183.399.015 128.394.015zm54.201 66.411c-2.785 24.423-24.423 39.848-47.774 39.848H65.75l4.217-21.852h57.357l5.142-27.208H75.22l3.474-17.996h64.912c17.78.001 41.775 2.786 38.989 27.208z' })
  );
};

PotAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PotAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = PotAlt;
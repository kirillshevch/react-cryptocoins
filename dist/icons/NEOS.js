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

var Neos = function Neos(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 595.279 595.281',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M0 .001h64.997v595.28H0zm364.322 164.468L78.559.001v595.28h64.997V111.912l220.766 127.729zm0-90.865L237.103.001H107.389l256.933 148.774zm0-73.603H264.219l100.103 57.915zm165.961 0h64.996v595.28h-64.996z' }),
    _react2.default.createElement('path', { d: 'M451.722 483.371l-220.765-127.73v75.172l285.762 164.468V.001h-64.997zm-220.765 38.306l127.219 73.604h129.713L230.957 446.506zm0 73.604H331.06l-100.103-57.909z' })
  );
};

Neos.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Neos.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Neos;
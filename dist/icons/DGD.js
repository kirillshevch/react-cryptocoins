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

var Dgd = function Dgd(props) {
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
    _react2.default.createElement('path', { d: 'M65.206 83.361h31.279v10.182H65.206zm77.997 46.551H70.3v37.099h72.806c10.1 0 18.96-8.457 18.96-18.665-.001-9.863-8.287-18.434-18.863-18.434z' }),
    _react2.default.createElement('path', { d: 'M113.33 0C50.739 0 0 50.741 0 113.331c0 62.592 50.739 113.331 113.33 113.331 62.59 0 113.33-50.739 113.33-113.331C226.66 50.741 175.92 0 113.33 0zm3.522 50.627h54.555v10.912H128.49v32.004h31.278V83.361h-21.822V72.449h33.461v32.006h-54.555V50.627zm-62.037.592h34.169v13.114H54.815V51.219zm-1.245 21.23h42.917V50.627h12.365v53.828H53.57V72.449zm91.293 108.381H55.025v-64.736h89.838c17.437 0 31.622 14.618 31.622 32.368S162.3 180.83 144.863 180.83z' })
  );
};

Dgd.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dgd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dgd;
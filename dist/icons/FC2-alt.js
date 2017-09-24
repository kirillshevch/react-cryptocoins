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

var Fc2Alt = function Fc2Alt(props) {
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
    _react2.default.createElement('path', { d: 'M159.162 67.919h-47.428l2.949-19.923h55.754L177.079.015H57.127l-27.593 192.75H93.25l11.099-74.958h47.865l6.948-49.888zM55.995 181.128H41.168L66.188 7.531h14.826L55.995 181.128z' }),
    _react2.default.createElement('path', { d: 'M190.669 184.443c-.848-2.596-1.728-5.28-1.728-10.271v-16.348c0-1.296 0-3.706-18.879-22.113a2.974 2.974 0 0 0-4.202.051 2.973 2.973 0 0 0 .053 4.204c7.32 7.14 15.711 15.962 17.084 18.347v15.859c0 5.937 1.075 9.223 2.024 12.118.736 2.255 1.319 4.032 1.319 6.902 0 2.915-2.423 3.687-3.7 3.687-.885 0-1.675-.289-2.224-.813-.66-.623-.994-1.593-.994-2.874v-29.265c0-4.899-3.729-9.967-9.968-9.967v-5.874a2.895 2.895 0 0 0-2.896-2.894h-39.297a2.895 2.895 0 0 0-2.895 2.894v71.11h-2.479a2.023 2.023 0 0 0-2.022 2.024v3.533c0 1.117.905 2.022 2.022 2.022h50.046a2.021 2.021 0 0 0 2.022-2.022v-3.533a2.023 2.023 0 0 0-2.022-2.024h-2.479v-59.292c3.303 0 4.023 2.903 4.023 4.022v29.265c0 3.708 1.546 5.956 2.846 7.187 1.66 1.574 3.902 2.442 6.316 2.442 4.676 0 9.645-3.377 9.645-9.629.001-3.816-.819-6.323-1.615-8.748zm-28.005-9.917a2.022 2.022 0 0 1-2.022 2.021h-27.46a2.02 2.02 0 0 1-2.022-2.021v-20.774c0-1.115.904-2.021 2.022-2.021h27.46c1.116 0 2.022.906 2.022 2.021v20.774z' })
  );
};

Fc2Alt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fc2Alt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Fc2Alt;
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

var VpnAlt = function VpnAlt(props) {
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
    _react2.default.createElement('path', { d: 'M.164 103.869h43.419l47.245 47.245v-47.245h33.973v94.946H92.404zm137.518-43.138v24.127h43.986c12.432 0 16.704 7.42 16.704 14.68 0 7.259-4.948 14.848-17.661 14.848h-43.029v30.036h52.141c19.798 0 36.954-13.499 36.954-44.377 0-30.882-23.232-39.315-36.954-39.315l-52.141.001z' }),
    _react2.default.createElement('path', { d: 'M172.65 172.996c11.151 4.055 17.849 9.242 17.849 14.902 0 12.987-35.257 23.511-78.745 23.511-43.49 0-78.744-10.523-78.744-23.511 0-5.66 6.697-10.848 17.845-14.902-19.872 5.32-32.47 13.197-32.47 21.99 0 16.028 41.802 29.022 93.369 29.022s93.37-12.994 93.37-29.022c0-8.793-12.601-16.67-32.474-21.99zM85.093 80.793a1.53 1.53 0 0 1-1.529 1.533h-19.55a1.532 1.532 0 0 1-1.532-1.533V61.248c0-.845.685-1.532 1.532-1.532h19.549c.844 0 1.529.688 1.529 1.532v19.545zm39.597 9.436a2.218 2.218 0 0 1-2.214 2.222H94.173a2.219 2.219 0 0 1-2.218-2.222V61.932c0-1.225.991-2.216 2.218-2.216h28.303c1.223 0 2.214.991 2.214 2.216v28.297zm-11.894-39.098c0 .78-.634 1.415-1.412 1.415H93.366a1.414 1.414 0 0 1-1.411-1.415V33.115c0-.779.632-1.41 1.411-1.41h18.018c.778 0 1.412.631 1.412 1.41v18.016zm-29.475 0c0 .78-.632 1.415-1.409 1.415H63.893a1.415 1.415 0 0 1-1.411-1.415V33.115c0-.779.633-1.41 1.411-1.41h18.019a1.41 1.41 0 0 1 1.409 1.41v18.016zM78.26 26.586c0 .591-.48 1.068-1.068 1.068H63.551a1.068 1.068 0 0 1-1.068-1.068V12.948c0-.592.479-1.069 1.068-1.069h13.641a1.07 1.07 0 0 1 1.068 1.069v13.638zM57.027 47.121c0 .62-.502 1.122-1.122 1.122H41.611a1.12 1.12 0 0 1-1.12-1.122V32.823c0-.615.5-1.117 1.12-1.117h14.294c.62 0 1.122.502 1.122 1.117v14.298zM51.289 24.73a.73.73 0 0 1-.729.734h-9.339a.732.732 0 0 1-.73-.734v-9.336a.73.73 0 0 1 .73-.731h9.339a.73.73 0 0 1 .729.731v9.336zM35.766 12.834a.73.73 0 0 1-.73.732h-9.339a.73.73 0 0 1-.73-.732V3.498c0-.404.326-.73.73-.73h9.339c.404 0 .73.326.73.73v9.336z' })
  );
};

VpnAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

VpnAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = VpnAlt;
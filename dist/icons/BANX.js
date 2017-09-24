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

var Banx = function Banx(props) {
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
    _react2.default.createElement('path', { d: 'M52.791 116.949h-9.334v10.274h9.334c3.696 0 6.265-1.314 6.265-5.013-.001-3.947-2.757-5.261-6.265-5.261zm41.115-12.718l-5.075 15.661H98.98l-4.948-15.661zm-36.666.94c0-3.259-2.319-4.324-4.762-4.324h-9.021v8.583h9.021c2.005 0 4.762-1.065 4.762-4.259z' }),
    _react2.default.createElement('path', { d: 'M113.429.085C50.831.085.084 50.832.084 113.431s50.747 113.346 113.345 113.346c62.602 0 113.348-50.746 113.348-113.346S176.031.085 113.429.085zM53.01 69.767c0-.37.299-.669.669-.669h9.724c.369 0 .669.299.669.669v16.099a.67.67 0 0 1-.669.669h-9.724c-.37 0-.669-.3-.669-.669V69.767zm-21.208 0c0-.37.299-.669.67-.669h9.723c.371 0 .67.299.67.669v16.099a.67.67 0 0 1-.67.669h-9.723a.67.67 0 0 1-.67-.669V69.767zm11.064 89.544a.67.67 0 0 1-.67.67h-9.723a.67.67 0 0 1-.67-.67v-16.099a.67.67 0 0 1 .67-.67h9.723a.67.67 0 0 1 .67.67v16.099zm21.206 0c0 .369-.3.67-.669.67h-9.724a.67.67 0 0 1-.669-.67v-16.099a.67.67 0 0 1 .669-.67h9.724a.67.67 0 0 1 .669.67v16.099zm-10.78-22.753h-21.49V91.825h20.925c7.707-.125 16.164 1.879 16.164 11.215 0 4.009-2.38 7.267-5.888 9.021 4.762 1.379 7.705 5.515 7.705 10.589 0 10.651-7.83 13.908-17.416 13.908zm51.202 0l-2.757-8.02h-15.6l-2.819 8.02H71.352l16.727-44.733H99.92l16.729 44.733h-12.155zm53.996 0h-11.964l-15.538-27.88h-.124v27.88h-10.966V91.825h11.968l15.537 27.566h.125V91.825h10.962v44.733zm34.287 0l-8.392-14.911-9.148 14.911H161.83l15.915-23.495-14.601-21.238h13.722l7.52 13.908 7.954-13.908h13.282l-14.471 21.238 15.788 23.495h-14.162z' })
  );
};

Banx.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Banx.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Banx;
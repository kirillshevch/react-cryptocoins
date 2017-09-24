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

var Brk = function Brk(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M224.041 85.93l-11.765 6.793s-8.109-8.608-17.556-24.971c-9.447-16.363-12.848-27.69-12.848-27.69l12.145-7.012C180.674 19.762 164.04 9.777 145.445 4.421V19.03s-11.509 2.719-30.404 2.719-30.404-2.719-30.404-2.719V3.847c-19.077 5.1-36.17 15.049-49.882 28.447l13.455 7.768s-3.4 11.327-12.848 27.69-17.556 24.971-17.556 24.971L4.218 84.878A113.592 113.592 0 0 0 .599 113.4c0 10.073 1.32 19.837 3.785 29.135l13.422-7.749s8.109 8.608 17.556 24.971c9.447 16.363 12.848 27.69 12.848 27.69l-12.999 7.505c13.634 13.174 30.56 22.958 49.426 28.002v-14.476s11.509-2.719 30.404-2.719 30.404 2.719 30.404 2.719v13.901c18.386-5.296 34.85-15.119 48.116-28.184l-11.689-6.749s3.4-11.326 12.848-27.69c9.447-16.363 17.556-24.971 17.556-24.971l11.614 6.705a113.63 113.63 0 0 0 3.509-28.091 113.62 113.62 0 0 0-3.358-27.469zM113.999 201.322c-48.558 0-87.922-39.364-87.922-87.922s39.364-87.922 87.922-87.922 87.922 39.364 87.922 87.922-39.364 87.922-87.922 87.922z' }),
    _react2.default.createElement('path', { d: 'M84.613 112.729c2.175-.261 7.439-4.046 7.657-11.05.174-8.875-3.677-15.836-15.02-15.836H59.903v57.862h17.141c6.265 0 15.836-3.393 17.315-14.096 1.479-10.702-4.177-15.314-9.746-16.88zM70.141 95.994h5.453c4.234 0 6.526 1.74 6.526 6.7s-3.974 6.381-6.584 6.381h-5.395V95.994zm6.413 37.415H70.14v-15.024h6.482c5.034 0 7.758 1.999 7.758 7.695.001 5.696-4.723 7.329-7.826 7.329zm56.147-29.526c0-13.516-8.121-18.04-16.126-18.04h-18.04v57.862h10.441v-20.97c1.251 0 5.197-.006 5.444-.011l8.956 20.981h11.529l-10.419-23.331c5.079-2.741 8.215-8.002 8.215-16.491zm-19.026 8.585h-4.699V95.994h5.279c3.77 0 8.295 1.392 8.295 8.295 0 6.903-5.337 8.179-8.875 8.179zm60.915-26.625h-11.54l-13.867 23.335V85.843h-10.28v57.862h10.28v-15.308l5.085-8.517 11.497 23.825h11.346l-16.339-34.718z' })
  );
};

Brk.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Brk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Brk;
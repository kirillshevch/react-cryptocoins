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

var DgbAlt = function DgbAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.327 0C50.739 0 0 50.739 0 113.327c0 62.589 50.739 113.328 113.328 113.328 62.589 0 113.328-50.738 113.328-113.328C226.655 50.739 175.917 0 113.327 0zm61.024 106.188c-1.103 14.649-18.525 45.776-52.768 52.048l-3.298 30.622-10.829-1.168 3.029-28.13c-3.081.245-6.059.413-8.939.519l-2.809 26.068-10.83-1.169 2.676-24.805c-22.099-.436-35.663-4.494-35.663-4.494L89.7 89.946l25.797 4.776-27.327 54.079c28.607 1.895 44.334-12.037 53.122-26.943 8.787-14.909.387-30.192-11.463-32.676-11.849-2.483-71.276-11.847-71.276-11.847l14.712-16.626s16.524 2.917 34.963 6.268l2.832-26.282 10.83 1.167-2.919 27.082c2.944.542 5.866 1.083 8.709 1.613l2.927-27.15 10.83 1.167-3.021 28.042c24.28 4.973 37.064 18.52 35.935 33.572z' })
  );
};

DgbAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DgbAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = DgbAlt;
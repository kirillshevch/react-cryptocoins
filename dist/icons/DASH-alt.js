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

var DashAlt = function DashAlt(props) {
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
    _react2.default.createElement('path', { d: 'M92.683 97.738H10.195L.65 128.765h82.488z' }),
    _react2.default.createElement('path', { d: 'M223.896 57.882c-4.539-8.829-13.874-12.097-20.937-12.097H48.831l-10.426 33.79h138.119l-20.803 67.626H16.501l-10.427 33.79h148.032c14.464 0 18.33-2.531 28.673-8.586s18.414-16.649 22.789-29.262c4.376-12.613 15.05-48.181 18.328-60.037 3.281-11.855 4.541-16.395 0-25.224z' })
  );
};

DashAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DashAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = DashAlt;
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

var BchAlt = function BchAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M202.277 184h-39.986c22-15.421 36.383-40.953 36.383-69.84 0-28.886-14.383-54.418-36.383-69.84h41.018C182.557 17.369 149.967 0 113.322 0 76.674 0 44.086 17.368 23.334 44.32h41.019C42.351 59.743 27.97 85.275 27.97 114.16c0 28.887 14.381 54.419 36.383 69.84H24.366c20.791 26.198 52.912 43 88.956 43 36.043 0 68.164-16.802 88.955-43zM45.582 131.146c-9.56-37.37 13.02-75.406 50.432-84.954 37.412-9.55 75.488 13.005 85.047 50.376 9.559 37.37-13.02 75.406-50.432 84.955-37.411 9.548-75.489-13.007-85.047-50.377z' }),
    _react2.default.createElement('path', { d: 'M150.084 116.529c-1.297-5.572-4.377-8.818-7.777-10.237s-7.684-1.24-7.684-1.24 2.93-2.868 3.826-5.217c.898-2.348.813-5.61.52-7.24s-1.734-8.412-7.959-10.939c-4.813-1.955-9.756-1.957-16.088-.752l-3.464-13.545-8.361 2.134 3.423 13.384-6.367 1.626-3.424-13.385-8.36 2.133 3.425 13.385-16.447 4.198 2.218 8.67 4.833-1.233c1.32-.337 3.7-.788 4.981.071 1.28.858 1.607 1.398 2.16 3.563l8.839 34.554c.21.821.313 1.875-.22 2.719-.534.842-1.196 1.177-2.877 1.606l-5 1.275.848 10.47 16.446-4.198 3.414 13.347 8.359-2.134-3.414-13.346 6.367-1.625 3.414 13.346 8.361-2.134-3.469-13.566c2.127-.678 4.1-1.354 5.236-1.81l.18-.071c2.387-.95 7.459-2.969 11.498-7.648 4.141-4.799 3.866-10.59 2.563-16.161zm-43.392-6.468l-4.123-16.115s2.597-.912 5.225-1.542c2.628-.629 4.951-1.14 8.659-.963 3.707.178 6.395 2.233 7.254 5.258.855 3.024.047 5.392-1.969 7.277-2.014 1.887-5.074 3.415-8.093 4.311-3.017.895-6.953 1.774-6.953 1.774zm24.8 19.028c-1.645 1.543-5.234 3.457-8.873 4.677-3.643 1.222-9.219 2.519-9.219 2.519l-4.582-17.911s5.243-1.629 9.454-2.413c4.211-.782 7.957-.618 9.719-.235 1.762.382 4.936 1.4 5.984 5.498 1.048 4.095-.838 6.323-2.483 7.865z' })
  );
};

BchAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BchAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BchAlt;
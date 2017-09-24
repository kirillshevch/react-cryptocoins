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

var UsdtAlt = function UsdtAlt(props) {
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
    _react2.default.createElement('path', { d: 'M127.329 100.328v16.979a278.765 278.765 0 0 1-29.027-.064v-13.556h-.003v-3.307c-26.678 1.284-46.427 5.897-46.427 11.392 0 6.491 27.542 11.749 61.518 11.749 33.974 0 61.518-5.258 61.518-11.749-.001-5.576-20.321-10.239-47.579-11.444z' }),
    _react2.default.createElement('path', { d: 'M113.389-.001C50.767-.001 0 50.763 0 113.387c0 62.621 50.767 113.39 113.389 113.39 62.622 0 113.388-50.769 113.388-113.39 0-62.624-50.767-113.388-113.388-113.388zm13.938 132.639v50.016H98.298V132.57c-31.075-1.798-54.321-9.026-54.321-17.674 0-8.646 23.246-15.873 54.321-17.674V83.207H58.779V54.179H166.85v29.028h-39.523l.002 13.948c31.654 1.684 55.474 8.989 55.474 17.741-.001 8.754-23.82 16.06-55.476 17.742z' })
  );
};

UsdtAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

UsdtAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = UsdtAlt;
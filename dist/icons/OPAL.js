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

var Opal = function Opal(props) {
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
    _react2.default.createElement('path', { d: 'M113.533.289C50.99.289.289 50.99.289 113.533S50.99 226.777 113.533 226.777s113.244-50.701 113.244-113.244S176.076.289 113.533.289zm-29.57 61.926l27.613 15.943-27.613 15.943V62.215zm-30.64 17.738l27.614 15.944-27.614 15.943V79.953zm0 35.479l27.614 15.943-27.614 15.945v-31.888zm28.534 49.628l-27.614-15.943 27.614-15.944v31.887zm0-35.479l-27.614-15.944 27.614-15.943v31.887zm0-35.48L54.242 78.158l27.614-15.943v31.886zm2.106 38.862l27.613 15.944-27.613 15.944v-31.888zm28.464 49.552l-27.614-15.943 27.614-15.944v31.887zm0-106.078L84.813 60.493l27.614-15.942v31.886zm32.782-14.222l27.615 15.943-27.615 15.943V62.215zm0 35.479l27.615 15.943-27.615 15.944V97.694zm-30.571-53.143l27.614 15.942-27.614 15.944V44.551zm0 137.964v-31.888l27.614 15.944-27.614 15.944zm28.465-17.664l-27.613-15.944 27.613-15.944v31.888zm0-70.75L115.49 78.158l27.613-15.943v31.886zm2.106 70.959v-31.888l27.615 15.944-27.615 15.944zm28.534-17.74l-27.615-15.944 27.615-15.943v31.887zm0-35.48l-27.615-15.943 27.615-15.944v31.887z' })
  );
};

Opal.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Opal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Opal;
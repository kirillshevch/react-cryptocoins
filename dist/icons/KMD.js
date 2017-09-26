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

var Kmd = function Kmd(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      id: 'Layer_1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement(
      'style',
      null,
      '.st0{fill-rule:evenodd;clip-rule:evenodd}'
    ),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M195.309 37.615l-5.776-5.777c-17.77-7.438-35.536-14.89-53.312-22.316l-14.66-6.136-4.06-1.682-4.101-1.7-4.102 1.7-4.059 1.682L90.58 9.523c-17.776 7.426-35.543 14.878-53.312 22.316l-5.777 5.777L0 113.399l31.491 75.784 5.777 5.777c25.373 10.621 50.725 21.299 76.133 31.836 25.408-10.537 50.759-21.215 76.132-31.836l5.776-5.777 31.491-75.784-31.491-75.784zm-34.436 123.257L113.4 180.537l-47.473-19.664L46.263 113.4l19.664-47.472L113.4 46.262l47.472 19.665 19.665 47.472-19.664 47.473z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 65.927L79.832 79.832 65.927 113.4l13.905 33.567 33.568 13.906 33.568-13.906 13.905-33.567-13.905-33.568z'
    })
  );
};

Kmd.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Kmd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Kmd;
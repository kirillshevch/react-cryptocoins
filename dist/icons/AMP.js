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

var Amp = function Amp(props) {
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
    _react2.default.createElement('path', { d: 'M113.388 0C50.765 0 0 50.764 0 113.389c0 62.624 50.766 113.388 113.389 113.388 62.622 0 113.388-50.765 113.388-113.388C226.776 50.764 176.01 0 113.388 0zM56.549 113.177c0-13.681 11.09-24.771 24.772-24.771 13.68 0 24.771 11.09 24.771 24.771 0 13.682-11.091 24.771-24.771 24.771-13.682 0-24.772-11.09-24.772-24.771zm101.129 24.771c-19.322 0-34.986 15.664-34.986 34.987 0 13.682-11.091 24.771-24.772 24.771s-24.771-11.09-24.771-24.771c0-13.681 11.09-24.771 24.771-24.771 19.322 0 34.988-15.664 34.988-34.987S117.242 78.19 97.92 78.19l.014-.013c-.091.001-.18.013-.27.013-13.682 0-24.772-11.091-24.772-24.772 0-13.68 11.09-24.772 24.772-24.772 13.68 0 24.771 11.092 24.771 24.772h.002c0 19.324 15.663 34.988 34.986 34.988l-.014.014c.09-.002.179-.014.269-.014 13.682 0 24.772 11.09 24.772 24.771.001 13.681-11.09 24.771-24.772 24.771z' })
  );
};

Amp.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Amp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Amp;
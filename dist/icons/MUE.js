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

var Mue = function Mue(props) {
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
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.766 0 113.389s50.766 113.39 113.39 113.39c62.623 0 113.39-50.767 113.39-113.39C226.779 50.766 176.012 0 113.389 0zM90.45 59.588c4.521-2.803 17.904 18.085 20.436 18.446 2.532.362 9.042-6.148 13.202-9.585 4.159-3.435 22.335-14.829 23.147-13.653.815 1.175-12.749 9.043-20.254 14.83-7.505 5.788-12.841 14.648-18.809 14.648-5.967 0-16.818-16.819-18.355-18.687-1.537-1.868-1.502-4.676.633-5.999zm58.533 96.178l-11.331-47.019-24.263 29.177-24.687-29.177-11.332 47.019H55.909l21.461-90.18 36.019 44.126 35.113-44.126 21.219 90.18h-20.738z' })
  );
};

Mue.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Mue.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Mue;
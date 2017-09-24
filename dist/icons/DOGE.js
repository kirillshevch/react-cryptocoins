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

var Doge = function Doge(props) {
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
    _react2.default.createElement('path', { d: 'M116.338 74.87h-16.236v32h25.538v13.399h-25.538v32h17.023c4.375 0 35.918.494 35.87-37.232-.048-37.724-30.589-40.167-36.657-40.167z' }),
    _react2.default.createElement('path', { d: 'M113.609 0C50.864 0 0 50.864 0 113.608c0 62.745 50.864 113.609 113.609 113.609 62.743 0 113.607-50.864 113.607-113.609C227.216 50.864 176.352 0 113.609 0zm4.464 174.968H76.928V120.27H62.425v-13.399h14.502V52.17h35.312c8.354 0 63.684-1.735 63.684 62.425 0 65.221-57.85 60.373-57.85 60.373z' })
  );
};

Doge.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Doge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Doge;
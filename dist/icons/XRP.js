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

var Xrp = function Xrp(props) {
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
    _react2.default.createElement('path', { d: 'M113.48.183C50.908.183.183 50.908.183 113.48c0 62.572 50.725 113.297 113.297 113.297 62.572 0 113.297-50.726 113.297-113.297C226.777 50.908 176.052.183 113.48.183zm47.419 163.777c-7.365 12.656-23.905 17.119-36.941 9.97-13.037-7.149-17.635-23.205-10.268-35.862 3.068-5.272 1.153-11.96-4.28-14.941-5.356-2.937-12.132-1.166-15.261 3.941h-.002v-.021c-.044.078-.083.155-.128.232-7.365 12.656-23.904 17.12-36.94 9.97-13.038-7.149-17.636-23.207-10.271-35.86 7.367-12.657 23.905-17.12 36.944-9.969 4.357 2.39 7.765 5.779 10.107 9.7v-.014l.002-.002c3.248 5.032 10.055 6.654 15.341 3.603 5.362-3.095 7.125-9.824 3.936-15.03-7.651-12.494-3.42-28.645 9.451-36.072 12.869-7.428 29.506-3.321 37.159 9.172 7.651 12.495 3.422 28.645-9.451 36.073a27.612 27.612 0 0 1-13.697 3.694l.012.005v.002c-6.175.207-11.081 5.161-11.007 11.191.073 6.11 5.239 11.008 11.533 10.936l-.039.021a27.627 27.627 0 0 1 13.533 3.401c13.034 7.151 17.632 23.206 10.267 35.86z' })
  );
};

Xrp.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Xrp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Xrp;
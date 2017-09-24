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

var BcAlt = function BcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M9.013 3.635s27.076 6.973 27.076 47.18v121.333c0 47.482-27.076 50.21-27.076 50.21v4.041l44.25-2.122V2.119L9.013 0v3.635zm169.07 50.464c.605 32.261-12.429 44.855-12.429 44.855s31.978-10.305 31.369-46.978c-.605-36.672-43.795-46.068-43.795-46.068s24.247 15.929 24.855 48.191zm-2.952 56.827s19.136 17.035 20.059 53.297c.927 36.264-20.059 54.146-20.059 54.146s40.382-11.366 39.927-54.555c-.455-43.189-39.927-52.888-39.927-52.888z' }),
    _react2.default.createElement('path', { d: 'M162.322 118.805c-7.274-6.061-27.885-13.032-27.885-13.032s13.64-6.819 19.853-16.669c6.213-9.851 11.063-27.884 6.518-46.826-4.546-18.943-21.216-37.886-40.613-40.613-19.398-2.729-27.631.454-51.172.758v221.652s35.714 2.626 54.96 2.475c19.245-.151 48.795-13.336 54.25-49.251 5.455-35.914-8.639-52.432-15.911-58.494zM89.128 20.911c3.485-3.333 21.519-9.244 38.643 2.577s21.568 46.422 7.425 64.809-49.401 13.538-49.401 13.538-.153-77.59 3.333-80.924zm70.515 157.4c-8.182 31.622-33.034 32.534-46.068 32.027-13.032-.507-25.562-.305-26.975-36.977-1.412-36.673-.808-56.273-.808-56.273s38.794-1.516 52.03 4.244c13.235 5.759 30.006 25.357 21.821 56.979z' })
  );
};

BcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BcAlt;
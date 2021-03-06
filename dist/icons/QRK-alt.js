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

var QrkAlt = function QrkAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.407-.014C50.768-.014 0 50.747 0 113.366c0 62.621 50.769 113.411 113.407 113.411 62.609 0 113.385-50.79 113.385-113.411 0-62.619-50.776-113.38-113.385-113.38zm0 211.068c-53.952 0-97.679-43.751-97.679-97.688 0-53.936 43.728-97.656 97.679-97.656 53.926 0 97.664 43.72 97.664 97.656 0 53.937-43.738 97.688-97.664 97.688z' }),
    _react2.default.createElement('path', { d: 'M183.604 72.842c-8.124-14.083-26.134-18.907-40.226-10.776-3.196 1.847-5.889 4.222-8.09 6.929-.004-.003-.011-.003-.015-.007-4.825 6.903-12.82 11.43-21.875 11.43-9.064 0-17.054-4.527-21.879-11.43-.007.004-.02.007-.026.011-2.201-2.704-4.892-5.079-8.09-6.925-14.083-8.128-32.092-3.307-40.221 10.777-8.132 14.078-3.303 32.087 10.78 40.219 3.026 1.741 6.241 2.845 9.494 3.429 8.594.577 16.749 5.294 21.363 13.318 4.52 7.863 4.58 17.061.989 24.688.029.021.056.051.088.068-1.235 3.247-1.943 6.758-1.943 10.438 0 16.261 13.182 29.447 29.445 29.447 16.257 0 29.438-13.187 29.438-29.447 0-3.493-.652-6.828-1.773-9.942-3.794-7.729-3.79-17.149.853-25.155 4.539-7.834 12.455-12.476 20.839-13.194.005-.038.014-.076.017-.111 3.443-.553 6.851-1.698 10.054-3.546 14.081-8.134 18.906-26.141 10.778-40.221zM113.4 135.274c-12.094 0-21.894-9.806-21.894-21.896s9.8-21.89 21.894-21.89c12.085 0 21.893 9.8 21.893 21.89s-9.808 21.896-21.893 21.896z' })
  );
};

QrkAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

QrkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = QrkAlt;
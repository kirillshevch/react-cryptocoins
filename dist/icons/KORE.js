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

var Kore = function Kore(props) {
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
    _react2.default.createElement('path', { d: 'M101.254 94.26l35.873-37.937a61.463 61.463 0 0 0-23.607-4.688 61.448 61.448 0 0 0-24.332 4.995h17.151l-5.085 37.63zM84.833 66.974l1.2-8.871c-20.26 10.106-34.182 31.021-34.182 55.199 0 18.243 7.926 34.631 20.517 45.921l1.203-8.901c-9.017-9.72-14.549-22.714-14.549-37.02 0-19.57 10.319-36.72 25.811-46.328zm41.17 26.889l-11.8 12.666 14.984 23.771c4.588-4.222 7.467-10.269 7.467-16.998 0-8.174-4.251-15.332-10.651-19.439z' }),
    _react2.default.createElement('path', { d: 'M146.858 113.302c0 10.369-4.745 19.612-12.168 25.726l4.873 7.73c9.962-7.762 16.39-19.848 16.39-33.456 0-13.741-6.551-25.932-16.678-33.686l-6.236 6.691c8.364 6.056 13.819 15.88 13.819 26.995z' }),
    _react2.default.createElement('path', { d: 'M152.443 65.48l-4.903 5.264c12.479 9.986 20.478 25.333 20.478 42.558 0 17.909-8.648 33.788-21.983 43.719l3.836 6.088c15.345-11.22 25.316-29.345 25.316-49.807-.001-19.296-8.866-36.515-22.744-47.822zm-81.356 47.822c0 7.099 1.75 13.78 4.831 19.658l6.562-48.549c-7.059 7.575-11.393 17.721-11.393 28.891z' }),
    _react2.default.createElement('path', { d: 'M113.409.042C50.798.042.042 50.798.042 113.41c0 62.611 50.756 113.367 113.367 113.367 62.612 0 113.368-50.756 113.368-113.367C226.777 50.798 176.021.042 113.409.042zm.111 187.521c-41.012 0-74.258-33.249-74.258-74.262 0-41.01 33.246-74.257 74.258-74.257 41.01 0 74.258 33.247 74.258 74.257 0 41.013-33.248 74.262-74.258 74.262z' }),
    _react2.default.createElement('path', { d: 'M98.704 117.105l-.526-.064-6.441 47.655H79.44a61.369 61.369 0 0 0 34.08 10.276 61.371 61.371 0 0 0 34.08-10.276h-18.892l-30.004-47.591z' })
  );
};

Kore.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Kore.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Kore;
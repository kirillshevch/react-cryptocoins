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

var Jbs = function Jbs(props) {
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
    _react2.default.createElement('path', { d: 'M115.213 227.173s-.914-7.673 3.196-14.98 7.398-8.311 13.244-14.612c5.846-6.303 10.23-10.689 13.244-11.691 3.015-1.005 8.678.364 12.238.364 3.563 0 8.13-2.193 13.245-.821 5.114 1.37 3.653 7.033 6.851 11.142 3.196 4.11 10.504 8.404 14.248 8.222 3.746-.183 4.567-4.933 6.942-5.755 2.375-.821 7.855.73 11.782-1.369 3.929-2.103 5.206-6.852 6.941-10.596 1.736-3.744 6.119-7.489 6.119-11.326 0-3.835-5.891-19.5-14.795-35.255-8.906-15.758-19.455-27.951-22.745-33.431-3.287-5.479-6.986-17.948-11.371-22.47-4.384-4.521-8.631-2.92-11.097-6.483-2.467-3.562 2.74-30.918-21.1-55.306-23.836-24.389-67.542-32.61-100.013-7.675C9.671 40.066 1.314 71.029 7.205 97.61c5.892 26.58 27.264 60.831 70.285 64.256 43.02 3.424 54.255-32.608 54.666-39.321.411-6.713-4.109-11.098-4.109-11.098s-1.233 22.469-23.564 27.265c-22.333 4.796-40.144-10.551-46.309-27.265-6.166-16.714-4.521-33.978 4.795-44.527 9.316-10.549 30.417-19.044 41.239-.684-3.972-.274-22.058 1.644-23.565 5.89s8.221 25.347 15.345 30.963c7.124 5.618 18.906 4.521 23.565 2.466-4.659-1.918-12.33-6.027-16.167-11.646-3.836-5.617-5.206-10.549-3.288-13.151 1.918-2.604 27.127 2.19 27.127 2.19s8.084-18.358-10.138-35.895C98.863 29.516 64.2 34.312 48.993 54.863c-15.208 20.551-17.263 55.214 7.261 80.56-31.375-10.687-49.186-56.857-18.359-94.67 33.019-39.734 75.627-20.689 89.191-7.811 13.563 12.879 29.457 34.252 16.715 63.298 11.783 2.191 11.646 14.933 11.646 14.933s8.768-5.617 13.563-1.78c4.795 3.836 3.836 9.726 4.521 10.961.685 1.232 10.688 16.44 9.728 17.399-.959.959-9.453-9.18-17.399-14.797-7.946-5.616-19.181-7.672-19.181-7.672s12.604 7.535 12.879 16.852c.274 9.315-13.153 24.66-13.153 24.66s11.098-.136 17.126-3.149c6.027-3.015 8.358-6.438 12.057-6.438s11.92 8.493 17.126 15.617 10.275 17.263 10.275 17.263l7.946-6.986s3.015 9.315-2.055 13.836c-5.069 4.522-17.536 3.975-17.536 3.975s-2.055-5.617-9.729-11.92c-7.672-6.302-13.563-10.275-13.563-10.275s-6.577 7.947-20.963 7.947-19.317-8.359-19.317-8.359-14.522 3.288-22.194 19.866c-7.673 16.578-4.522 26.168-1.918 29.868 2.601 3.697 6.392 7.854 11.553 9.132z' })
  );
};

Jbs.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Jbs.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Jbs;
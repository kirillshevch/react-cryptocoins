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

var PartAlt = function PartAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.5 0C50.816 0 0 50.816 0 113.5S50.816 227 113.5 227 227 176.184 227 113.5 176.184 0 113.5 0zm45.259 122.357c.61-.58 1.205-1.177 1.781-1.791 2.101-1.965 4.052-4.088 6.002-6.207 2.34-2.546 4.679-5.089 7.263-7.346 3.701-2.434 9.286.334 9.404 4.827.398 3.085-1.716 5.106-3.777 7.076-.759.727-1.512 1.445-2.129 2.21-4.031 4.89-8.461 9.448-13.029 13.832-3.338 3.177-9.574.947-10.174-3.651-.627-3.821 2.11-6.476 4.659-8.95zm-3.706-25.124c0-3.402 2.738-6.159 6.116-6.159 3.377 0 6.116 2.758 6.116 6.158 0 3.402-2.739 6.159-6.116 6.159-3.378 0-6.116-2.757-6.116-6.158zm-8.843-54.231c3.378 0 6.116 2.757 6.116 6.159 0 3.401-2.738 6.159-6.116 6.159s-6.116-2.758-6.116-6.158c0-3.403 2.738-6.16 6.116-6.16zm-5.578 34.968c2.22-2.274 4.347-4.648 6.474-7.022l.002-.001c3.795-4.235 7.592-8.472 11.924-12.152 3.082-1.67 8.013-.312 8.869 3.383 1.306 3.286-.791 6.539-3.092 8.726-5.039 5.009-9.938 10.158-14.838 15.307-1.787 2.177-4.932 2.759-7.457 1.584-3.648-1.519-4.632-7.035-1.882-9.825zm-31.195-33.739c4.043-1.772 7.054 1.371 9.643 4.074.322.336.637.666.947.978a181.92 181.92 0 0 1 14.281 13.639c2.59 2.843 1.541 8.047-1.979 9.63-2.707 1.487-6.012.366-8.087-1.702a512.392 512.392 0 0 1-5.556-5.477c-3.521-3.51-7.043-7.02-10.759-10.316-3.507-2.887-2.791-9.156 1.51-10.826zm-30.393-.742c3.378 0 6.116 2.758 6.116 6.16 0 3.401-2.738 6.159-6.116 6.159s-6.117-2.758-6.117-6.16c0-3.4 2.739-6.159 6.117-6.159zM49.117 74.92c3.378 0 6.117 2.758 6.117 6.159v.002c0 3.402-2.739 6.16-6.117 6.16s-6.116-2.76-6.116-6.162c0-3.401 2.738-6.159 6.116-6.159zm0 79.741c-3.378 0-6.116-2.757-6.116-6.159s2.738-6.159 6.116-6.159c3.378 0 6.117 2.757 6.117 6.159s-2.739 6.159-6.117 6.159zm7.908-37.321c-2.071 2.399-4.286 4.969-7.721 4.551-4.985-.193-7.488-7.175-3.862-10.557 2.415-2.328 4.645-4.883 6.877-7.438 3.819-4.374 7.639-8.749 12.38-11.985 5.381-2.091 10.634 4.74 7.274 9.447-2.327 3.057-5.066 5.762-7.807 8.469l-.001.001-.001.001-.001.001v.001c-1.933 1.909-3.868 3.819-5.658 5.854a42.11 42.11 0 0 0-1.48 1.655zm14.946 13.262c0 3.4-2.738 6.158-6.116 6.158s-6.116-2.758-6.116-6.158c0-3.402 2.738-6.16 6.116-6.16s6.116 2.757 6.116 6.16zM80.773 185c-3.378 0-6.117-2.757-6.117-6.158 0-3.402 2.738-6.158 6.117-6.158 3.377 0 6.116 2.756 6.116 6.158 0 3.401-2.739 6.158-6.116 6.158zm3.405-32.625c-.745.717-1.481 1.427-2.085 2.178-4.022 4.902-8.504 9.395-13.03 13.832-2.942 2.995-9.211 1.551-10.045-2.746-1.405-4.094 1.985-7.412 4.635-10.004l.104-.102c2.297-2.165 4.461-4.469 6.623-6.77 2.702-2.875 5.401-5.748 8.354-8.344 3.594-2.166 9.051.409 9.136 4.805.488 3.119-1.631 5.162-3.692 7.151zm-1.721-64.149c-3.06.475-5.068-1.637-7.022-3.693-.71-.747-1.413-1.486-2.157-2.092-4.9-4.083-9.382-8.629-13.821-13.207-2.515-2.607-1.765-7.39 1.101-9.415l.001-.001c3.209-1.95 7.178-.657 9.553 1.994 3.39 3.447 6.848 6.821 10.305 10.193l.002.002c1.986 1.938 3.971 3.874 5.942 5.823 3.574 3.33 1.081 10.375-3.904 10.396zm14.415-28.355c3.378 0 6.116 2.758 6.116 6.16s-2.738 6.158-6.116 6.158v.001c-3.378 0-6.117-2.757-6.117-6.159 0-3.402 2.739-6.16 6.117-6.16zm18.716 124.371c-3.031.359-5.007-1.742-6.935-3.794-.726-.773-1.445-1.538-2.212-2.162-4.867-4.062-9.382-8.533-13.747-13.134-2.631-2.832-1.561-8.1 1.99-9.662 2.964-1.616 6.441-.086 8.57 2.187 5.37 5.365 10.74 10.729 16.314 15.88 3.668 3.511 1.187 10.632-3.98 10.685zm14.569-16.09c-3.378 0-6.117-2.756-6.117-6.158 0-3.401 2.739-6.159 6.117-6.159 3.377 0 6.116 2.758 6.116 6.159 0 3.402-2.739 6.158-6.116 6.158zm17.596 16.849c-3.378 0-6.116-2.757-6.116-6.159 0-3.4 2.738-6.158 6.116-6.158s6.117 2.758 6.117 6.158c0 3.402-2.739 6.159-6.117 6.159zm20.533-19.04c-1.69 3.986-7.49 4.083-10.304 1.26-2.692-2.558-5.334-5.177-7.978-7.797l-.001-.001c-2.932-2.905-5.865-5.813-8.87-8.641-3.454-2.704-2.642-8.962 1.487-10.525 1.99-.688 4.516-.741 6.193.701 2.112 2.021 4.27 3.993 6.428 5.965 4.203 3.843 8.406 7.685 12.273 11.886 1.809 1.841 1.968 4.933.772 7.152zm9.569-12.827c-3.377 0-6.114-2.757-6.114-6.159 0-3.4 2.737-6.158 6.114-6.158 3.379 0 6.117 2.758 6.117 6.158.001 3.402-2.738 6.159-6.117 6.159zm.03-67.44c-3.377 0-6.115-2.758-6.115-6.16 0-3.4 2.738-6.159 6.115-6.159 3.379 0 6.116 2.758 6.116 6.16 0 3.401-2.737 6.159-6.116 6.159z' })
  );
};

PartAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PartAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = PartAlt;
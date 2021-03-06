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

var BrxAlt = function BrxAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M80.35 117.349h-5.837v13.527h5.775c2.794 0 7.048-1.47 7.048-6.599 0-5.128-2.453-6.928-6.986-6.928zm33.884-20.16h-4.753v14.833h4.231c3.186 0 7.991-1.149 7.991-7.364-.001-6.216-4.075-7.469-7.469-7.469zm-28.935 6.032c0-4.466-2.063-6.032-5.876-6.032h-4.91v11.778h4.857c2.35 0 5.929-1.28 5.929-5.746z' }),
    _react2.default.createElement('path', { d: 'M113.502 36.901c-41.979 0-76.009 34.03-76.009 76.009s34.03 76.009 76.009 76.009 76.009-34.03 76.009-76.009c0-41.978-34.03-76.009-76.009-76.009zm-17.183 90.555c-1.332 9.636-9.95 12.692-15.59 12.692H65.295V88.049h15.62c10.214 0 13.681 6.267 13.524 14.259-.196 6.307-4.936 9.715-6.894 9.95 5.013 1.409 10.106 5.561 8.774 15.198zm26.128 12.691l-8.064-18.891c-.223.005-3.775.01-4.902.01v18.881h-9.401V88.049h16.243c7.208 0 14.52 4.074 14.52 16.243 0 7.644-2.824 12.381-7.396 14.848l9.381 21.007h-10.381zm46.105 0H158.21l-7.364-18.881-6.737 18.881h-9.95l11.36-26.794-10.733-25.305h10.42l6.581 18.411 5.954-18.411h10.106l-10.655 26.049 11.36 26.05z' }),
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm85.063 131.398s-7.01 7.441-15.177 21.588c-8.167 14.146-11.107 23.938-11.107 23.938l10.105 5.834c-11.468 11.294-25.702 19.787-41.596 24.365v-12.017s-9.95-2.35-26.284-2.35c-16.335 0-26.284 2.35-26.284 2.35v12.514c-16.31-4.36-30.942-12.819-42.729-24.208l11.237-6.488s-2.939-9.792-11.107-23.938c-8.167-14.146-15.177-21.588-15.177-21.588l-11.604 6.699a98.16 98.16 0 0 1-3.272-25.187 98.197 98.197 0 0 1 3.129-24.657l11.747 6.782s7.01-7.441 15.177-21.588c8.167-14.146 11.107-23.938 11.107-23.938l-11.632-6.716C56.85 31.211 71.627 22.61 88.119 18.201v13.127s9.95 2.35 26.284 2.35c16.335 0 26.284-2.35 26.284-2.35v-12.63c16.076 4.63 30.455 13.262 41.99 24.75l-10.499 6.062s2.939 9.792 11.107 23.938c8.167 14.146 15.177 21.588 15.177 21.588l10.171-5.872a98.243 98.243 0 0 1 2.903 23.748 98.18 98.18 0 0 1-3.034 24.284l-10.039-5.798z' })
  );
};

BrxAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BrxAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BrxAlt;
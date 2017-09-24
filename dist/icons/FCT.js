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

var Fct = function Fct(props) {
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
    _react2.default.createElement('path', { d: 'M36.219 118.146c63.602 0 95.097-52.542 95.097-52.542l3.994.923-2.15-39.022-22.853 31.263 3.034 1.308s-26.885 39.943-76.046 39.943c-22.786 0-31.776-12.968-35.268-24.509A115.51 115.51 0 0 0 0 94.358c3.938 12.675 13.783 23.788 36.219 23.788z' }),
    _react2.default.createElement('path', { d: 'M26.233 144.417c30.266 7.219 72.052-5.068 100.014-29.497 27.96-24.429 37.178-46.705 37.178-46.705l3.995.922-2.151-39.021-22.854 31.264 3.035 1.305s-11.677 25.656-43.017 46.244c-31.34 20.586-60.45 21.329-74.083 18.831-12.045-2.211-21.411-10.544-27.746-18.28.725 6.892 2.059 13.6 3.944 20.075 5.141 6.827 12.156 12.588 21.685 14.862z' }),
    _react2.default.createElement('path', { d: 'M133.312 145.337c25.042-15.822 43.016-43.168 43.016-43.168l3.073 1.076-1.996-39.636-22.854 31.915 3.496 1.577s-10.754 18.895-41.787 37.483c-31.033 18.59-51.33 24.137-76.047 21.51-14.643-1.555-25.3-9.34-32.479-17.135a114.887 114.887 0 0 0 8.503 17.391c7.385 7.949 16.901 14.49 28.738 15.875 34.107 3.993 63.296-11.062 88.337-26.888z' }),
    _react2.default.createElement('path', { d: 'M150.634 165.233c25.811-18.092 43.671-43.438 43.671-43.438l4.493 1.959-1.958-39.638-23.16 31.11 4.032 1.498s-18.436 23.735-40.673 38.483c-22.238 14.75-47.587 25.695-73.282 25.695-14.891 0-27.51-4.594-37.295-10.105a116.15 116.15 0 0 0 14.568 14.668c8.564 4.9 17.926 8.342 27.336 8.342 32.723 0 56.459-10.482 82.268-28.574z' }),
    _react2.default.createElement('path', { d: 'M225.337 75.59L202.6 106.93l5.224 2.151s-11.521 28.732-38.561 52.082c-20.597 17.787-54.385 37.795-85.572 37.795-11.669 0-22.422-2.254-31.407-5.131a115.017 115.017 0 0 0 20.646 10.68c6.574 1.775 13.349 2.898 19.977 2.898 19.666 0 45.167-7.836 78.659-31.953 33.491-24.123 51.006-61.916 51.006-61.916l4.763 1.077-1.998-39.023z' }),
    _react2.default.createElement('path', { d: 'M188.197 168.458s-10.254 14.75-46.205 31.227c-19.491 8.936-38.472 10.516-51.769 10.092a115.467 115.467 0 0 0 27.562 2.686c8.981-.863 18.695-2.889 28.586-6.785 27.431-10.809 48.623-33.531 48.623-33.531l1.729 1.039.806-15.785-11.175 9.793 1.843 1.264z' })
  );
};

Fct.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fct.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Fct;
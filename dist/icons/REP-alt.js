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

var RepAlt = function RepAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 123.305 595.279 595.28',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M375.947 488.644c-1.13-.645-11.263-6.648-17.966-18.839-3.093-5.616-4.868-13.2-6.745-21.23-1.938-8.281-4.133-17.663-7.448-22.703-6.82-10.365-16.334-21.108-35.067-25.275.693-.551 1.396-1.093 2.029-1.661 6.038-5.407 9.548-12.125 11.568-18.603 21.646 7.28 33.46 21.542 40.856 32.788 5.582 8.483 8.278 20.004 10.655 30.164 1.373 5.866 2.928 12.51 4.48 15.341 3.053 5.547 7.587 8.828 8.863 9.685l35.452 16.094-113.217-202.893v79.131c.16 3.741.172 18.574-8.974 26.767-2.697 2.411-6.897 5.025-12.716 8.638-9.482 5.893-22.46 13.959-29.454 21.918-8.03 9.145-11.28 20.262-11.871 42.046-6.877-3.396-14.916-6.415-22.943-7.288 1.145-20.694 5.328-36.347 17.381-50.07 9.257-10.544 23.93-19.661 34.642-26.313 3.695-2.297 8.295-5.154 9.477-6.215.69-.987 1.412-5.362 1.27-8.632a13.7 13.7 0 0 1-.017-.573v-79.409L172.986 484.409l25.334-11.5c1.923-.947 10.735-4.988 20.614-4.988 12.887 0 29.697 10.456 36.785 15.986 14.727 11.488 24.543 16.339 30.781 18.273-.542.434-1.113.868-1.612 1.318-5.995 5.365-9.5 12.03-11.528 18.457-9.445-3.961-19.998-10.455-31.914-19.752-7.867-6.136-18.75-11.083-22.512-11.083-4.194 0-8.94 1.9-10.416 2.631-.117.057-.302.148-.422.199l-37.039 16.808 115.172 71.669v-40.64c-.16-3.738-.171-18.571 8.974-26.767 2.697-2.408 6.897-5.027 12.715-8.641 9.479-5.884 22.46-13.953 29.454-21.915 2.491-2.836 4.463-5.912 6.072-9.308.337.69.611 1.432.984 2.105 4.255 7.744 9.577 13.577 14.151 17.658-1.198 1.654-2.408 3.299-3.772 4.856-9.26 10.541-23.933 19.661-34.645 26.315-3.695 2.294-8.296 5.153-9.477 6.215-.691.987-1.41 5.359-1.268 8.629.006.172.015.405.015.576v40.881l115.12-71.636-47.671-21.642a10.581 10.581 0 0 1-.934-.469z' }),
    _react2.default.createElement('path', { d: 'M297.64 122.755C132.822 122.755-.786 256.253-.786 420.95c0 164.679 133.608 298.185 298.426 298.185 164.814 0 298.427-133.506 298.427-298.185 0-164.697-133.613-298.195-298.427-298.195zm154.445 393.653l-149.172 92.814c-1.563.971-3.339 1.461-5.108 1.461s-3.544-.49-5.108-1.461l-149.172-92.814c-4.377-2.722-5.847-8.412-3.333-12.92l149.172-267.322a9.664 9.664 0 0 1 16.882 0l149.172 267.322c2.514 4.508 1.044 10.199-3.333 12.92z' })
  );
};

RepAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

RepAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = RepAlt;
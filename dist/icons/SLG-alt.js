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

var SlgAlt = function SlgAlt(props) {
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
    _react2.default.createElement('path', { d: 'M58.319 91.972v45.332h94.655zm55.051-40.378l-44.415 28.81h88.649zm0 123.458l44.232-28.806H68.955zm54.819-40.375V89.345H73.534z' }),
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.764 0 113.389c0 62.621 50.767 113.388 113.39 113.388 62.622 0 113.389-50.767 113.389-113.388C226.778 50.764 176.011 0 113.389 0zm63.742 141.775a4.467 4.467 0 0 1-2.03 3.744v.003l-61.722 40.194-61.964-40.19-.015-.013a4.536 4.536 0 0 1-.665-.532c-.012-.012-.025-.021-.037-.034a4.444 4.444 0 0 1-.538-.646 4.458 4.458 0 0 1-.778-2.389l-.003-.088c0-.016-.003-.032-.003-.05v-56.9c0-1.57.812-2.949 2.038-3.747v-.003l61.964-40.195L175.1 81.128l.013.011a4.392 4.392 0 0 1 .701.568c.2.199.382.418.542.653l.017.023c.313.466.541.996.662 1.567v.001c.055.258.083.526.091.798 0 .027.003.053.003.08l.002.045v56.901z' })
  );
};

SlgAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SlgAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SlgAlt;
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

var Snrg = function Snrg(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M112.5 0l-90 58.6v41.7l43 27.6 74.3-48.2-26.4-17.1-48.1 31.7-23-14.9 70.2-45.6 91.7 59.8V60z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M87 147l26.3 17.2 48.2-31.7 23 14.9-70.3 45.6-91.7-59.8v33.6l91.7 60 90-58.7v-41.6l-42.9-27.7z'
    })
  );
};

Snrg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Snrg.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Snrg;
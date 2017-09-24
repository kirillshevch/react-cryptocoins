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

var MscAlt = function MscAlt(props) {
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
    _react2.default.createElement('path', { d: 'M101.323 84.538L78.563 33.87-.031 185.55l57.136-12.456c-3.926-8.192-6.127-17.368-6.127-27.061 0-30.402 21.634-55.747 50.345-61.495zM226.777 185.55L150.535 33.87l-23.878 50.788c28.424 5.969 49.767 31.177 49.767 61.375 0 9.743-2.222 18.966-6.184 27.192l56.537 12.325z' }),
    _react2.default.createElement('circle', { cx: '113.701', cy: '146.032', r: '43.808' })
  );
};

MscAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

MscAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = MscAlt;
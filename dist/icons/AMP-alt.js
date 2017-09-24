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

var AmpAlt = function AmpAlt(props) {
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
    _react2.default.createElement('circle', { cx: '89.056', cy: '113.228', r: '18.796' }),
    _react2.default.createElement('path', { d: 'M146.994 94.432c-.069 0-.136.009-.204.011l.011-.011c-14.662 0-26.547-11.885-26.547-26.547 0-10.381-8.416-18.797-18.797-18.797s-18.795 8.416-18.795 18.797 8.415 18.795 18.795 18.795c.068 0 .136-.01.205-.011l-.011.011c14.661 0 26.548 11.886 26.548 26.547s-11.887 26.546-26.548 26.546c-10.38 0-18.795 8.416-18.795 18.796 0 10.381 8.416 18.796 18.795 18.796 10.381 0 18.796-8.415 18.796-18.796 0-14.662 11.886-26.547 26.547-26.547 10.38 0 18.796-8.416 18.796-18.795 0-10.38-8.416-18.795-18.796-18.795z' }),
    _react2.default.createElement('path', { d: 'M113.389 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389 62.622 0 113.388-50.766 113.388-113.389C226.777 50.766 176.011 0 113.389 0zm-.001 199.423c-47.515 0-86.035-38.518-86.035-86.034 0-47.518 38.52-86.035 86.035-86.035 47.517 0 86.034 38.518 86.034 86.035.001 47.516-38.517 86.034-86.034 86.034z' })
  );
};

AmpAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

AmpAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = AmpAlt;
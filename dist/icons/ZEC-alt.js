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

var ZecAlt = function ZecAlt(props) {
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
    _react2.default.createElement('path', { d: 'M297.582 123.305C133.231 123.305 0 256.581 0 421.006c0 164.407 133.231 297.689 297.582 297.689 164.349 0 297.582-133.282 297.582-297.689 0-164.425-133.233-297.701-297.582-297.701zm104.83 224.116c-1.869 9.971-13.072 18.691-20.545 27.423-23.654 28.043-47.312 55.464-71.589 83.513-9.336 11.219-18.672 21.19-29.254 32.403h121.388v61.078h-74.701c1.245 17.454 1.866 33.655 3.111 51.109h-62.873v-50.482H193.25c0-19.948-2.487-39.888 1.246-58.584 1.867-9.977 13.072-18.702 19.918-27.425 23.654-28.047 47.309-55.47 71.586-83.511 9.338-10.595 18.677-20.565 29.258-32.411H198.851v-61.073h69.096v-51.105h60.384v49.857h75.322c.003 20.564 2.492 40.511-1.241 59.208z' })
  );
};

ZecAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ZecAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ZecAlt;
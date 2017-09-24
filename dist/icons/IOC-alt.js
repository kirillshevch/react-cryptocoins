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

var IocAlt = function IocAlt(props) {
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
    _react2.default.createElement('path', { d: 'M88.843 78.343v145.741a113.698 113.698 0 0 0 24.534 2.671c8.424 0 16.632-.927 24.533-2.671V78.343s-9.48-5.764-24.533-5.764c-15.055 0-24.534 5.764-24.534 5.764zM0 113.379c0 49.594 31.847 91.746 76.205 107.134v-43.618c-21.789-12.779-36.43-36.431-36.43-63.516 0-27.087 14.641-50.739 36.43-63.519V6.241C31.846 21.631 0 63.782 0 113.379zM150.549 6.241V49.86c21.789 12.78 36.431 36.432 36.431 63.519 0 27.085-14.642 50.736-36.431 63.516v43.618c44.357-15.388 76.204-57.54 76.204-107.134 0-49.597-31.847-91.748-76.204-107.138zm-61.706-3.57v41.31c7.675-2.715 15.928-4.206 24.534-4.206s16.857 1.491 24.533 4.206V2.671A113.772 113.772 0 0 0 113.377 0c-8.426 0-16.634.928-24.534 2.671z' })
  );
};

IocAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

IocAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = IocAlt;
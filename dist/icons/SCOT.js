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

var Scot = function Scot(props) {
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
    _react2.default.createElement('path', { d: 'M179.353 93.16h-61.681l-3.317-1.656c-8.203-4.134-13.575-6.619-13.575-12.134 0-5.794 5.939-8.827 13.575-8.827 9.051 0 17.536 5.24 26.021 13.519l23.193-22.899c-12.162-15.722-29.98-24.279-49.496-24.279-28.852 0-48.649 19.31-48.649 42.208 0 4.991.96 9.649 2.723 14.069H47.423v16.758h32.936c3.262 2.923 7.083 5.709 11.41 8.379H47.423v16.758h75.538c5.142 3.482 8.081 7.031 8.081 11.35 0 6.623-7.354 11.862-16.687 11.862-9.898 0-22.629-7.172-31.398-17.099l-23.19 24.827c13.011 16.544 30.83 25.102 52.607 25.102 32.811 0 54.023-19.587 54.023-45.795 0-3.688-.521-7.038-1.272-10.247h14.229v-16.758H156.6c-2.571-2.969-5.768-5.716-9.31-8.379h32.063V93.16z' }),
    _react2.default.createElement('path', { d: 'M113.388 0C50.867 0 0 50.867 0 113.388s50.867 113.389 113.389 113.389 113.389-50.867 113.389-113.389S175.911 0 113.388 0zm0 203.958c-49.939 0-90.568-40.626-90.568-90.569 0-49.941 40.628-90.567 90.568-90.567s90.567 40.626 90.567 90.567c.001 49.943-40.627 90.569-90.567 90.569z' })
  );
};

Scot.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Scot.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Scot;
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

var Dao = function Dao(props) {
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
      d: 'M119 46.5H68.3v59.3h45.1v14.9H68.3v58.1h49.8c26.7 0 51.5-15.2 51.5-65.6.1-50.4-30.4-66.7-50.6-66.7z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M0 0v226.8h226.8V0H0zm118.3 200.9H45.5v-80.2H28.6v-14.9h16.9V24.5h74c29.6 0 74 21.7 74 88.9s-36.1 87.5-75.2 87.5z'
    })
  );
};

Dao.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dao.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dao;
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

var Xai = function Xai(props) {
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
    _react2.default.createElement('path', { d: 'M113.366 0C50.756 0 0 50.756 0 113.366c0 62.612 50.756 113.368 113.367 113.368 62.612 0 113.368-50.756 113.368-113.368C226.734 50.756 175.978 0 113.366 0zm58.073 75.955l-7.748 7.75-7.749-7.75 7.749-7.75 7.748 7.75zm3.147 38.324l-7.749 7.747-28.481-28.481 7.747-7.752 28.483 28.486zM156.21 59.6l-46.46 46.461-7.754-7.746 46.467-46.466 7.747 7.751zm-42.675-6.711l7.749 7.75-28.478 28.48-7.752-7.748 28.481-28.482zm-38.319 3.146l7.75 7.748-7.75 7.751-7.749-7.751 7.749-7.748zm-16.357 15.23l46.462 46.459-7.747 7.755-46.465-46.466 7.75-7.748zm1.039 34.926l28.48 28.48-7.747 7.752-28.482-28.486 7.749-7.746zm-4.604 46.069l7.749-7.75 7.749 7.75-7.749 7.748-7.749-7.748zm15.229 16.358l46.463-46.463 7.753 7.746-46.468 46.466-7.748-7.749zm42.675 6.71l-7.75-7.752 28.481-28.479 7.751 7.746-28.482 28.485zm38.32-3.149l-7.75-7.749 7.75-7.748 7.75 7.748-7.75 7.749zm16.358-15.228l-46.463-46.462 7.746-7.752 46.467 46.467-7.75 7.747z' })
  );
};

Xai.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Xai.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Xai;
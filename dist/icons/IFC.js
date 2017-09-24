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

var Ifc = function Ifc(props) {
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
    _react2.default.createElement('path', { d: 'M153.61 96.912c-10.5 0-19.221 7.532-27.956 16.77 9.498 10.091 17.473 16.393 27.956 16.393 12.084 0 16.37-8.746 16.37-16.238 0-6.286-3.446-16.925-16.37-16.925zm-80.164 0c-15.038 0-15.799 13.52-15.799 16.229 0 6.29 3.328 16.934 15.799 16.934 10.032 0 18.557-7.406 27.134-16.49-8.668-9.406-16.824-16.673-27.134-16.673z' }),
    _react2.default.createElement('path', { d: 'M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494S176.175 0 113.494 0zm40.116 148.584c-17.59 0-30.284-10.471-40.556-21.26-10.637 11.086-22.928 21.26-39.608 21.26-22.283 0-34.31-18.26-34.31-35.443 0-17.263 11.786-34.738 34.31-34.738 17.052 0 29.258 10.391 39.725 21.55 10.761-11.212 23.273-21.55 40.439-21.55 22.656 0 34.88 18.257 34.88 35.435 0 17.266-11.98 34.746-34.88 34.746z' })
  );
};

Ifc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ifc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ifc;
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

var DmdAlt = function DmdAlt(props) {
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
    _react2.default.createElement('path', { d: 'M43.633 85.44L1.734 93.536A113.903 113.903 0 0 0 0 113.386c0 7.086.656 14.021 1.899 20.749l41.735 7.29-.001-55.985zm69.752 18.589l26.207-51.967H87.177zM52.06 87.178v52.416l51.969-26.208zm119.764-7.982l-24.25-24.251-24.67 48.922zM72.835 49.389L33.749 33.76l15.57 39.143zm120.176-15.64l-39.143 15.573 23.515 23.515zm-18.302 105.845V87.178l-51.966 26.208zm18.313 53.417l-15.573-39.143-23.516 23.516zM149.588 41.955l37.348-14.858c-12.777-10.901-28.002-19.015-44.738-23.399l7.39 38.257zm77.183 71.431c0-7.087-.656-14.021-1.899-20.749l-41.734-7.29v55.983l41.899-8.096a113.88 113.88 0 0 0 1.734-19.848zm-42.008-36.307l38.081 6.651c-4.436-16.413-12.46-31.347-23.184-43.912l-14.897 37.261zM72.901 177.45l-23.515-23.514-15.627 39.086zm111.915-27.862l14.858 37.348c10.901-12.775 19.014-28.001 23.399-44.737l-38.257 7.389zm2.137 50.073l-37.26-14.897-6.652 38.082c16.411-4.436 31.347-12.46 43.912-23.185zm-15.128-52.086l-48.921-24.671 24.67 48.92zM85.347 43.635h55.984l-8.096-41.901A113.991 113.991 0 0 0 113.385 0c-7.089 0-14.022.656-20.749 1.902l-7.289 41.733zm56.076 139.503H85.44l8.096 41.898a113.894 113.894 0 0 0 19.85 1.734c7.087 0 14.02-.656 20.749-1.899l7.288-41.733zm-28.038-60.395l-26.207 51.966h52.414zm-73.566-95.63l37.258 14.896L83.73 3.927c-16.413 4.437-31.347 12.46-43.911 23.186zm15.128 52.085l48.919 24.669-24.669-48.918zm-12.992-2.014L27.096 39.836C16.196 52.612 8.082 67.838 3.697 84.573l38.258-7.389zm12.991 70.393l24.249 24.25 24.671-48.923zm22.235 37.239l-37.346 14.858c12.775 10.901 28.002 19.014 44.738 23.399l-7.392-38.257zm-35.173-35.124l-38.081-6.651c4.435 16.411 12.46 31.348 23.184 43.912l14.897-37.261z' })
  );
};

DmdAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DmdAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = DmdAlt;
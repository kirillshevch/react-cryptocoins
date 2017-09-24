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

var Bay = function Bay(props) {
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
    _react2.default.createElement('path', { d: 'M139.705 226.777H15.185V45.012h45.013V0h88.315c19.359 0 37.684 9.07 51.598 25.538 11.479 13.592 18.611 30.803 18.611 44.917 0 18.02-6.489 34.213-11.372 43.507a91.855 91.855 0 0 1 8.473 19.516c5.634 18.664 4.255 36.851-3.984 52.591-8.455 16.155-21.038 27.721-37.392 34.378-10.318 4.2-22.007 6.33-34.742 6.33zM38.669 203.292h101.036c24.293 0 41.561-9.461 51.327-28.113 13.552-25.891-6.441-53.299-6.65-53.566l-5.819-7.179 5.632-7.316c1.704-2.311 11.045-18.969 11.045-36.663 0-6.884-4.092-19.132-13.067-29.759-5.432-6.428-17.026-17.211-33.658-17.211h-64.83v21.528h60.913c12.441 0 23.748 8.543 27.496 20.779a29.863 29.863 0 0 1-7.204 29.969c-2.501 2.499-12.376 11.146-20.292 18.023 8.376 7.951 19.703 18.724 22.493 21.513 9.217 9.217 7.449 25.657 2.187 32.928-4.259 5.883-11.835 13.702-28.371 13.702H58.814V79.261h23.485v79.181h58.606c5.976 0 7.568-1.582 9.002-3.517.275-.936.323-2.608.107-3.486-4.375-4.306-21.955-20.981-30.979-29.521l-9.442-8.936 9.847-8.488c9.806-8.451 26.305-22.802 28.843-25.34.104-.104 2.544-2.604 1.356-6.482-.84-2.74-3.172-4.174-5.042-4.174H38.669v134.794z' })
  );
};

Bay.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bay;
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

var MintAlt = function MintAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.116 0C50.344 0-.545 50.887-.545 113.66s50.888 113.661 113.661 113.661 113.661-50.888 113.661-113.661S175.889 0 113.116 0zm-8.56 153.278c-1.859 1.136-25.599 2.167-27.457 0-1.702-1.986-1.068-7.625-1.427-17.444H56.711L46.2 125.338h28.682c-.563-4.526-1.358-8.194-2.265-11.677H52.219l-10.511-10.496h27.586c-3.13-7.437-8.721-17.153-10.983-19.666-2.786-3.095-6.194-5.055-6.09-6.295.106-1.238.827-3.715 10.53-4.078 9.705-.36 12.698-.566 16.207 0 4.884.789 14.398 13.934 17.96 22.296 3.562 8.362 7.896 23.068 8.516 35.457.619 12.384.979 21.263-.878 22.399zm37.139 0c-1.858 1.136-25.599 2.167-27.457 0-1.857-2.167-.927-8.673-1.548-20.231-.621-11.561-2.477-17.96-4.541-25.186-2.066-7.227-9.91-21.265-12.697-24.362-2.789-3.095-6.194-5.055-6.089-6.295.102-1.238.822-3.715 10.529-4.078 9.701-.36 12.696-.566 16.205 0 4.885.789 14.399 13.934 17.961 22.296 3.561 8.362 7.896 23.068 8.516 35.457.62 12.384.979 21.263-.879 22.399zm38.021 0c-1.858 1.136-25.599 2.167-27.457 0s-.932-8.673-1.548-20.231c-.62-11.561-2.477-17.96-4.543-25.186-2.063-7.227-9.907-21.265-12.695-24.362-2.787-3.095-6.193-5.055-6.092-6.295.104-1.238.825-3.715 10.53-4.078 9.703-.36 12.696-.566 16.206 0 4.883.789 14.397 13.934 17.96 22.296 3.56 8.362 7.896 23.068 8.516 35.457.617 12.384.98 21.263-.877 22.399z' })
  );
};

MintAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

MintAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = MintAlt;
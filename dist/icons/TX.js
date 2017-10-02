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

var Tx = function Tx(props) {
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
    _react2.default.createElement('path', { d: 'M113.433 0C50.885 0 0 50.884 0 113.432c0 62.546 50.886 113.433 113.433 113.433 62.545 0 113.43-50.887 113.43-113.433C226.863 50.884 175.978 0 113.433 0zm0 219.633c-58.559 0-106.201-47.642-106.201-106.2 0-58.56 47.642-106.201 106.201-106.201 58.558 0 106.199 47.641 106.199 106.201 0 58.558-47.641 106.2-106.199 106.2z' }),
    _react2.default.createElement('circle', { cx: '113.433', cy: '50.338', r: '22.962' }),
    _react2.default.createElement('circle', { cx: '54.081', cy: '138.882', r: '22.962' }),
    _react2.default.createElement('path', { d: 'M58.277 107.669c1.875-18.072 12.472-33.582 27.488-42.265a31.363 31.363 0 0 1-3.771-16.944C58.846 59.707 42.575 82.965 41.33 110.08a31.375 31.375 0 0 1 12.752-2.698c1.424 0 2.822.104 4.195.287zm110.294-.125a31.828 31.828 0 0 1 3.194-.162c4.943 0 9.619 1.142 13.78 3.169-1.077-27.315-17.394-50.779-40.674-62.091a31.373 31.373 0 0 1-3.771 16.944c14.982 8.665 25.561 24.122 27.471 42.14zm-21.959 50.294c-9.259 6.936-20.747 11.05-33.179 11.05-12.729 0-24.459-4.321-33.828-11.559a31.603 31.603 0 0 1-13.399 10.629c12.67 10.987 29.179 17.662 47.228 17.662 17.898 0 34.281-6.562 46.911-17.386a31.596 31.596 0 0 1-13.733-10.396z' }),
    _react2.default.createElement('circle', { cx: '171.765', cy: '138.88', r: '22.962' }),
    _react2.default.createElement('path', { d: 'M113.433 15.276c-54.125 0-98.158 44.032-98.158 98.156 0 54.125 44.033 98.156 98.158 98.156 54.122 0 98.155-44.031 98.155-98.156 0-54.124-44.034-98.156-98.155-98.156zm58.332 155.104c-.953 0-1.897-.051-2.829-.133-14.335 14.007-33.928 22.655-55.503 22.655-21.628 0-41.262-8.689-55.604-22.753a31.53 31.53 0 0 1-3.747.23c-17.396 0-31.5-14.103-31.5-31.498 0-9.754 4.435-18.471 11.396-24.247-.006-.401-.015-.801-.015-1.202 0-33.34 20.641-61.95 49.814-73.726 4.362-12.165 15.99-20.866 29.655-20.866 13.663 0 25.292 8.702 29.653 20.866 29.173 11.776 49.815 40.385 49.815 73.726 0 .693-.009 1.383-.026 2.071 6.38 5.763 10.391 14.1 10.391 23.378 0 17.396-14.103 31.499-31.5 31.499z' })
  );
};

Tx.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Tx.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Tx;
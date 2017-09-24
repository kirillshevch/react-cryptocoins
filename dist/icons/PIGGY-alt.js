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

var PiggyAlt = function PiggyAlt(props) {
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
    _react2.default.createElement('ellipse', {
      transform: 'rotate(-92.247 143.495 107.572)',
      cx: '143.495',
      cy: '107.569',
      rx: '6.356',
      ry: '3.307'
    }),
    _react2.default.createElement('path', { d: 'M152.292 98.166c-1.547.059-2.708 2.521-2.591 5.493.117 2.974 1.466 5.336 3.014 5.273 1.548-.058 2.709-2.519 2.59-5.492-.115-2.975-1.465-5.339-3.013-5.274zm-62.391-28.54l-4.173 1.654c2.147-.012 8.396-1.202 16.549-.254 8.155.95 16.633 6.314 16.633 6.314l5.117-2.979s-4.583-3.97-15.651-5.496c-12.846-1.772-18.475.761-18.475.761z' }),
    _react2.default.createElement('path', { d: 'M113.485 0C50.876 0 .121 50.755.121 113.364s50.755 113.364 113.364 113.364 113.364-50.755 113.364-113.364S176.094 0 113.485 0zm52.323 137.844c-4.606 7.186-11.453 11.027-15.43 8.718-6.074 6.554-12.715 10.615-19.45 12.878-2.21 4.644-6.841 10.772-12.935 10.883-5.696.104-10.968-5.903-13.771-9.778-6.529-1.382-12.416-3.704-17.07-6.102a80.186 80.186 0 0 1-7.819-4.571c-2.634.298-5.713.285-7.602-.926-2.143-1.372-2.843-5.099-3.043-8.107-6.784-7.508-11.462-17.483-11.462-31.132 0-24.279 16.032-34.048 16.032-34.048.009-.009.021-.015.03-.02.419-3.289 1.724-8.093 5.675-10.903 4.328-3.077 10.271-.2 13.696 2.008 10.132-2.619 22.4-2.893 35.742 2.432 3.217-2.697 9.444-7.09 16.466-7.72 10.23-.915 14.506 5.806 15.116 9.928.454 3.056-2.456 14.185-3.985 19.724 4.848 7.609 7.358 16.186 7.228 24.862l3.906 4.093c3.946 2.53 3.351 10.489-1.324 17.781z' }),
    _react2.default.createElement('path', { d: 'M164.689 125.123c-1.136-.12-2.259 1.716-2.51 4.101-.25 2.389.468 4.419 1.601 4.536 1.135.117 2.26-1.717 2.508-4.104.252-2.385-.465-4.417-1.599-4.533zm-6.534 5.507c-1.3-.142-2.578 1.868-2.853 4.484-.275 2.614.556 4.843 1.854 4.978 1.305.138 2.58-1.87 2.854-4.485.275-2.612-.556-4.843-1.855-4.977z' })
  );
};

PiggyAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PiggyAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = PiggyAlt;
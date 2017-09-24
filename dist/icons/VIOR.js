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

var Vior = function Vior(props) {
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
    _react2.default.createElement('path', { d: 'M113.408.039C50.796.039.039 50.796.039 113.408s50.757 113.369 113.369 113.369 113.369-50.757 113.369-113.369S176.02.039 113.408.039zM37.701 113.535c0-41.812 33.896-75.705 75.706-75.705 7.125 0 14.019.985 20.555 2.827 19.082 7.906 32.524 26.583 32.524 48.313a51.663 51.663 0 0 1-3.132 17.745 58.679 58.679 0 0 0-49.75-27.389c-35.55 0-58.611 30.288-58.611 58.086 0 14.079 5.058 26.986 13.466 37.04-18.657-13.785-30.758-35.938-30.758-60.917zm99.605-26.931l-23.899 58.075-23.9-58.075h12.512l11.388 30.377 11.39-30.377h12.509zm-23.899 102.637c-4.412 0-8.737-.382-12.943-1.107-22.825-5.798-39.745-26.341-39.745-50.721a51.58 51.58 0 0 1 3.138-17.737 58.68 58.68 0 0 0 49.747 27.38c30.932 0 58.607-25.991 58.607-58.085 0-12.945-4.285-24.891-11.51-34.547 17.318 13.873 28.411 35.196 28.411 59.112.001 41.81-33.893 75.705-75.705 75.705z' })
  );
};

Vior.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Vior.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Vior;
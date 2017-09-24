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

var Strat = function Strat(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 595.279 595.281',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M583.452 297.74c-8.46-5.065-19.863-4.672-30.501 1.035-1.759.944-244.654 136.193-254.136 141.963-1.75 1.063-2.625 1.603-6.298-.403-3.984-2.172-247.491-138.222-252.74-141.109-2.319-1.28-5.403-3.56-5.403-8.579v-40.598C96.223 284.73 268.49 381.339 277.28 386.267c5.721 3.212 12.181 4.911 18.681 4.911 6.708 0 13.5-1.808 19.656-5.218 50.836-28.199 258.129-143.155 264.393-146.628 9.388-5.204 15.171-14.574 15.089-24.453-.077-9.288-5.28-17.587-13.924-22.197-5.024-2.68-142.465-78.933-269.411-149.405-5.122-2.839-10.479-4.286-15.921-4.286a29.344 29.344 0 0 0-14.347 3.743 4857232.06 4857232.06 0 0 0-268.61 150.63C4.808 197.894-.011 206.201 0 215.588c0 .034.006.063.006.094H0v74.964c0 16.48 8.461 30.582 23.214 38.693 5.147 2.837 248.71 138.915 252.851 141.172 17.408 9.492 31.692 5.024 40.599-.397 5.65-3.405 199.61-111.763 244.061-136.38v37.657c0 .46 0 1.853-6.64 6.036-8.608 5.326-241.883 136.511-252.916 142.49-4.718 2.559-5.303 2.217-7.241 1.104-8.39-4.82-263.222-147.959-274.067-154.053L3.027 396.941c2.654 1.495 265.532 149.152 273.78 153.888 6.955 3.996 13.44 5.462 19.312 5.462 8.621 0 15.913-3.166 21.423-6.15 1.919-1.04 245.263-137.573 254.85-143.621 6.21-3.91 22.708-14.313 22.708-35.128v-51.919c-.001-9.38-4.244-17.304-11.648-21.733zM296.156 73.922c54.056 30.012 208.972 115.999 255.583 141.785-45.32 25.127-208.483 115.616-252.792 140.188-1.841 1.018-3.379 1.217-4.848.393-9.197-5.161-197.183-110.585-250.734-140.606 48.937-27.446 213.689-119.836 252.791-141.76z' })
  );
};

Strat.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Strat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Strat;
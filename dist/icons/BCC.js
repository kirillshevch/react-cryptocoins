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

var Bcc = function Bcc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.666 43.5c-5.767-.01-11.629.7-17.475 2.191v-.003c-37.41 9.551-59.99 47.587-50.431 84.957 9.56 37.37 47.637 59.925 85.049 50.375 37.412-9.548 59.99-47.584 50.432-84.954-8.067-31.53-36.434-52.514-67.575-52.566zM0 43.82V183.5h64.531c-22-15.421-36.383-40.953-36.383-69.84 0-28.886 14.382-54.418 36.383-69.84H0zm162.469 0c22 15.422 36.383 40.954 36.383 69.84 0 28.887-14.382 54.419-36.383 69.84H227V43.82h-64.531zm-50.832 23.037l3.465 13.545c6.33-1.205 11.273-1.202 16.087.754 6.224 2.526 7.666 9.308 7.96 10.938.291 1.63.377 4.894-.521 7.24-.896 2.35-3.824 5.219-3.824 5.219s4.279-.179 7.683 1.24c3.397 1.42 6.479 4.664 7.778 10.236 1.303 5.569 1.574 11.361-2.564 16.159-4.039 4.679-9.113 6.699-11.498 7.649l-.179.07c-1.136.455-3.108 1.133-5.237 1.81l3.469 13.565-8.359 2.135-3.415-13.346-6.367 1.625 3.414 13.346-8.359 2.135-3.414-13.348-16.447 4.197-.846-10.469 5-1.275c1.68-.431 2.342-.764 2.875-1.605.533-.844.43-1.899.22-2.721l-8.837-34.553c-.554-2.165-.88-2.705-2.16-3.563-1.282-.859-3.663-.409-4.983-.069l-4.832 1.231-2.219-8.672 16.448-4.197-3.427-13.383 8.36-2.133 3.423 13.385 6.367-1.625-3.424-13.385 8.363-2.135zm3.666 24.047c-2.965-.012-5.03.447-7.33.998-2.627.63-5.225 1.543-5.225 1.543l4.121 16.116s3.938-.881 6.955-1.776c3.018-.896 6.082-2.422 8.094-4.308 2.015-1.887 2.824-4.256 1.969-7.28-.86-3.024-3.547-5.08-7.254-5.258a31.112 31.112 0 0 0-1.33-.035zm8.926 24.002a32.93 32.93 0 0 0-5.777.555c-4.213.784-9.456 2.412-9.456 2.412l4.582 17.91s5.579-1.296 9.219-2.518c3.641-1.22 7.229-3.133 8.875-4.676 1.643-1.542 3.529-3.771 2.481-7.867-1.048-4.098-4.221-5.116-5.983-5.498-.881-.191-2.258-.328-3.941-.318z' })
  );
};

Bcc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bcc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bcc;
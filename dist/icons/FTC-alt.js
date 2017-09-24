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

var FtcAlt = function FtcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M209.689.015c-2.121-.625-32.981 18.277-47.352 29.174-14.368 10.898-41.179 32.162-42.191 34.381-1.013 2.217-1.109 6.22-2.313 16.297-1.206 10.078-5.4 14.466-5.4 14.466s-2.026-1.542-3.136-4.822c-1.11-3.279-1.832-12.442-2.507-12.633-.674-.194-18.742 16.637-18.742 16.637s-1.285 8.419-4.049 25.137c-2.766 16.717-7.009 23.708-7.925 23.805s-2.894-6.461-3.568-13.117c-.674-6.653-.192-22.422-.916-22.903-.724-.483-10.221 9.515-10.221 9.515s1.284 11.894 2.248 27.453c.965 15.558-.513 26.247-2.104 27.26-1.592 1.013-4.001-2.797-7.523-11.14-3.519-8.342-3.76-14.947-5.399-15.526-1.641-.579-5.063 7.57-6.075 15.673-1.013 8.099-.242 20.396-.242 20.396s-4.726-8.775-7.716-13.357c-2.99-4.58-9.933-13.743-10.799-13.068-.871.675 2.939 8.101 5.253 14.708 2.315 6.607 5.401 16.395 5.401 16.395s-8.053-7.86-11.717-10.464c-3.666-2.604-14.32-8.631-15.189-6.75-.867 1.879 6.461 7.427 9.645 10.607 3.183 3.182 9.982 10.463 9.982 10.463s-3.425 3.569-4.292 8.439c-.869 4.87 1.253 9.45 1.253 9.45s5.642-11.669 8.873-11.86c3.231-.193 4.436 6.413 3.472 10.751-.965 4.341-15.189 19.257-14.467 21.267.724 2.009 18.854-17.055 20.558-20.687 3.6 4.372 22.759 11.829 23.853 11.442 1.092-.384-7.395-6.234-10.738-9.386-3.342-3.149-7.199-12.472-5.849-13.692 1.35-1.223 3.085 6.234 12.793 10.928 9.709 4.694 24.561 5.722 24.817 5.078.257-.644-11.38-4.112-18.259-8.485-6.879-4.372-10.352-13.437-10.352-13.437s9.966 1.991 34.913 3.343c24.946 1.351 40.632-7.136 40.632-7.136s-21.861-.258-36.067-.9c-14.211-.643-34.59-2.442-34.59-2.442s5.384-8.006 19.722-10.897c14.335-2.895 37.307-1.319 39.362-1.64 2.059-.322 35.04-46.869 35.04-46.869s-20.381.834-18.967-2.638c3.144-7.717 20.767-5.979 23.402-6.235 2.635-.259 10.865-12.345 20.511-23.661 9.643-11.316 36.004-40.569 37.353-59.471C221.456 10.961 211.812.643 209.689.015zm-71.943 102.95c-16.202 19.159-53.362 56.192-53.362 56.192s24.816-33.817 43.334-55.549c18.516-21.732 55.804-62.622 55.804-62.622s-29.574 42.82-45.776 61.979z' })
  );
};

FtcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

FtcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = FtcAlt;
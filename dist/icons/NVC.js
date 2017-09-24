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

var Nvc = function Nvc(props) {
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
    _react2.default.createElement('path', { d: 'M158.015.45c-36.594 0-66.254 10.386-66.254 23.201v20.586c3.545 7.364 28.568 16.732 66.254 16.732 37.682 0 62.706-9.369 66.248-16.732V23.651C224.263 10.836 194.6.45 158.015.45zM21.927 183.433l-.936-1.938v-2.299c-3.995 2.986-6.294 6.305-6.294 9.819v20.587c3.545 7.363 28.568 16.73 66.254 16.73 37.682 0 62.707-9.367 66.249-16.73v-10.685c-13.362 4.146-30.98 6.593-50.519 6.593-37.759 0-68.502-9.077-74.754-22.077z' }),
    _react2.default.createElement('path', { d: 'M30.429 173.343v5.999c3.543 7.365 28.566 16.732 66.253 16.732 37.682 0 62.706-9.367 66.25-16.732v-20.585c0-1.471-.433-2.902-1.182-4.295v3.215l-.931 1.941c-6.257 12.998-36.993 22.075-74.755 22.075-22.151 0-41.842-3.141-55.635-8.35zm104.584-49.855v-20.585c0-12.816-29.664-23.201-66.25-23.201-36.594 0-66.251 10.385-66.251 23.201v20.585c3.541 7.364 28.565 16.731 66.251 16.731 37.682 0 62.706-9.367 66.25-16.731z' }),
    _react2.default.createElement('path', { d: 'M144.449 123.978v1.663l-.933 1.938c-6.255 12.999-36.991 22.075-74.753 22.075-18.765 0-35.796-2.243-48.951-6.095v11.964c3.543 7.364 28.566 16.732 66.252 16.732 37.682 0 62.706-9.368 66.25-16.732V134.94c.001-3.971-2.856-7.7-7.865-10.962zM91.761 56.99v14.683c20.015 2.459 38.074 8.252 46.916 17.723a208.39 208.39 0 0 0 19.339.878c37.682 0 62.706-9.369 66.248-16.732V56.99c-13.821 8.847-40.142 13.415-66.248 13.415-26.113 0-52.433-4.568-66.255-13.415zm52.289 42.275c.239 1.176.399 2.385.399 3.637v10.33c3.702 1.849 6.908 3.943 9.557 6.285 1.332.021 2.641.061 4.01.061 37.682 0 62.706-9.369 66.248-16.732V86.297c-13.821 8.845-40.142 13.413-66.248 13.413a222.236 222.236 0 0 1-13.966-.445zm17.701 35.675v6.051c3.152 2.256 5.693 4.785 7.507 7.583 31.351-1.631 51.831-9.823 55.006-16.422V115.6c-13.349 8.543-38.35 13.081-63.562 13.381.66 1.89 1.049 3.862 1.049 5.959zm10.616 23.817v18.946c29.601-1.991 48.823-9.866 51.896-16.247v-16.549c-11.293 7.223-30.922 11.592-51.961 12.951.022.298.065.594.065.899zm-15.731 36.617v13.929c.461.008.913.027 1.379.027 36.585 0 66.248-10.387 66.248-23.199v-11.922c-11.938 7.64-33.211 12.081-55.61 13.152-2.748 2.961-6.827 5.657-12.017 8.013z' })
  );
};

Nvc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Nvc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Nvc;
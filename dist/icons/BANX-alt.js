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

var BanxAlt = function BanxAlt(props) {
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
    _react2.default.createElement('path', { d: 'M185.621 144.285l11.828-19.276 10.853 19.276h18.309l-20.414-30.378 18.713-27.459h-17.176l-10.285 17.982-9.721-17.982h-17.74l18.875 27.459-20.576 30.378zM88.24 86.448H72.929l-21.626 57.837h15.471l3.646-10.368h20.17l3.564 10.368h15.717L88.24 86.448zm-14.338 36.289l6.562-20.25h.164l6.396 20.25H73.902zm-33.395-10.125c4.535-2.269 7.613-6.479 7.613-11.664 0-12.07-10.934-14.662-20.898-14.5H.166v57.837H27.95c12.396 0 22.519-4.213 22.519-17.983 0-6.561-3.806-11.907-9.962-13.69zM15.233 98.113h11.665c3.161 0 6.158 1.376 6.158 5.59 0 4.129-3.565 5.508-6.158 5.508H15.233V98.113zm12.069 34.103H15.233v-13.283h12.069c4.538 0 8.102 1.698 8.102 6.802 0 4.78-3.322 6.481-8.102 6.481zm122.333-10.126l-20.09-35.642h-15.473v57.837h14.178v-36.047h.16l20.09 36.047h15.47V86.448h-14.175v35.642zM28.451 152.024a.866.866 0 0 0-.866.865v20.816c0 .477.389.865.866.865h12.572a.867.867 0 0 0 .866-.865v-20.816a.866.866 0 0 0-.866-.865H28.451zm12.573-72.417a.867.867 0 0 0 .866-.864V57.927a.866.866 0 0 0-.866-.866H28.451a.865.865 0 0 0-.866.866v20.815c0 .476.389.864.866.864h12.573zm-27.419 0a.867.867 0 0 0 .866-.864V57.927a.865.865 0 0 0-.866-.866H1.032a.864.864 0 0 0-.866.866v20.815c0 .476.387.864.866.864h12.573zM1.032 152.024a.865.865 0 0 0-.866.865v20.816c0 .477.387.865.866.865h12.572a.867.867 0 0 0 .866-.865v-20.816a.865.865 0 0 0-.866-.865H1.032z' })
  );
};

BanxAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BanxAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BanxAlt;
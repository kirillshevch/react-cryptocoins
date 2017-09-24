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

var Bts = function Bts(props) {
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
    _react2.default.createElement('path', { d: 'M113.435.193C50.866.193.094 50.867.094 113.435c0 62.567 50.772 113.342 113.342 113.342 62.568 0 113.342-50.774 113.342-113.342C226.777 50.867 176.004.193 113.435.193zm47.328 134.785h-27.854c-.346-2.179-1.147-4.243-2.406-5.963l19.716-19.716c5.843 6.993 9.856 15.818 10.544 25.679zm-40.579-40.464c9.858.457 18.686 4.47 25.676 10.545l-19.716 19.717c-1.718-1.145-3.782-2.065-5.96-2.408V94.514zM73.99 40.753l40.349 36.107v45.622c-1.834.345-3.784 1.149-5.388 2.179-3.898-3.897-27.396-27.512-34.847-35.078-.114-1.376-.114-48.83-.114-48.83zm0 57.886l30.261 30.261c-1.145 1.835-2.063 3.899-2.408 6.078H73.99V98.639zm0 42.297h27.853c.344 2.065 1.147 4.127 2.408 5.733l-19.717 19.945c-5.959-6.877-9.856-15.818-10.544-25.678zm40.461 40.35c-9.856-.459-18.682-4.469-25.674-10.545l19.717-19.715c1.717 1.146 3.781 2.062 5.957 2.406v27.854zm5.733 0v-27.854a14.748 14.748 0 0 0 6.076-2.406l19.6 19.6c-6.877 6.075-15.817 9.973-25.676 10.66zm30.377-15.131L130.73 146.44a15.823 15.823 0 0 0 2.064-5.617h28.082c-.686 9.63-4.469 18.341-10.315 25.332z' })
  );
};

Bts.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bts.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bts;
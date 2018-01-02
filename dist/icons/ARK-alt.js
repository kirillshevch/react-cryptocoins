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

var ArkAlt = function ArkAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 250 250',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: color
    }, otherProps),
    _react2.default.createElement(
      'g',
      { fill: 'currentColor', fillRule: 'evenodd' },
      _react2.default.createElement('circle', { fill: 'currentColor', cx: '125', cy: '125', r: '125' }),
      _react2.default.createElement('path', {
        d: 'M124.637 107.958L50 184.279 124.972 66 200 185l-75.363-77.042zm10.83 30.318h-23.335l12-12.804 11.335 12.911v-.107zm-44.995 21.003l-.002-.164 13.23-13.136v-.055l40.364-.169 13.621 13.524H90.472z',
        fill: 'currentColor',
        fillRule: 'nonzero'
      })
    )
  );
};

ArkAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ArkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ArkAlt;
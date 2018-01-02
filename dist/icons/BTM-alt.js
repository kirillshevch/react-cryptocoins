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

var BtmAlt = function BtmAlt(props) {
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
        d: 'M99.304 92.522l14.609 14.608-40.696 40.957 6 22.696 15.392 4.174 19.304 19.304-5.74 5.739-45.912-12.26L50 141.825l9.13-9.13 40.174-40.174zm88.435 95.217L141.826 200l-49.304-49.304 14.608-14.609 40.957 40.696 22.696-6 4.174-15.392 19.304-19.304 5.739 5.74-12.26 45.912zM170.783 79.217l-15.392-4.174-19.304-19.304 5.74-5.739 45.912 12.26L200 108.175l-49.304 49.304-14.609-14.608 40.696-40.957-6-22.696zM75.043 94.61L55.74 113.913l-5.74-5.74 12.26-45.912L108.175 50l9.13 9.13 40.174 40.174-14.608 14.609-40.957-40.696-22.696 6-4.174 15.392z',
        fill: 'currentColor',
        fillRule: 'nonzero'
      })
    )
  );
};

BtmAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BtmAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BtmAlt;
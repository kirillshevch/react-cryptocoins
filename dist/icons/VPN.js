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

var Vpn = function Vpn(props) {
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
    _react2.default.createElement('path', { d: 'M113.408.039C50.796.039.039 50.796.039 113.408s50.757 113.369 113.369 113.369 113.369-50.757 113.369-113.369S176.02.039 113.408.039zM99.272 60.525c0-.511.416-.924.927-.924h11.835c.512 0 .928.414.928.924V72.36a.93.93 0 0 1-.928.93h-11.835a.93.93 0 0 1-.927-.93V60.525zm0 18.93c0-.805.651-1.456 1.457-1.456h18.592c.803 0 1.454.651 1.454 1.456v18.588c0 .806-.651 1.459-1.454 1.459h-18.592a1.457 1.457 0 0 1-1.457-1.459V79.455zM79.911 47.278a.7.7 0 0 1 .701-.702h8.961c.386 0 .702.313.702.702v8.959a.704.704 0 0 1-.702.702h-8.961a.702.702 0 0 1-.701-.702v-8.959zm0 13.247c0-.511.416-.924.927-.924h11.836c.511 0 .925.414.925.924V72.36c0 .512-.414.93-.925.93H80.838a.93.93 0 0 1-.927-.93V60.525zm0 18.481c0-.555.451-1.006 1.006-1.006H93.76c.553 0 1.005.451 1.005 1.006v12.839c0 .558-.452 1.008-1.005 1.008H80.917c-.555 0-1.006-.45-1.006-1.008V79.006zM65.466 48.885c0-.265.213-.48.479-.48h6.135a.48.48 0 0 1 .479.48v6.132a.481.481 0 0 1-.479.483h-6.135a.48.48 0 0 1-.479-.483v-6.132zm0 11.449c0-.404.328-.733.735-.733h9.39c.407 0 .737.329.737.733v9.391c0 .408-.33.737-.737.737h-9.39a.735.735 0 0 1-.735-.737v-9.391zM55.268 41.07a.48.48 0 0 1 .479-.479h6.134c.265 0 .479.214.479.479v6.133a.48.48 0 0 1-.479.482h-6.134a.48.48 0 0 1-.479-.482V41.07zm12.228 65.934l31.035 31.034v-31.034h22.317v62.369H99.566l-60.592-62.369h28.522zm44.782 78.919c-33.875 0-61.334-8.536-61.334-19.065 0-5.776 8.277-10.949 21.329-14.444-7.323 2.662-11.721 6.071-11.721 9.789 0 8.531 23.158 15.444 51.726 15.444 28.566 0 51.726-6.913 51.726-15.444 0-3.718-4.399-7.127-11.725-9.789 13.055 3.495 21.332 8.668 21.332 14.444 0 10.528-27.46 19.065-61.333 19.065zm51.283-52.281H129.31v-19.729h28.266c8.351 0 11.601-4.986 11.601-9.753 0-4.771-2.807-9.645-10.973-9.645H129.31V78.667h34.251c9.013 0 24.274 5.54 24.274 25.825.001 20.283-11.27 29.15-24.274 29.15z' })
  );
};

Vpn.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Vpn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Vpn;
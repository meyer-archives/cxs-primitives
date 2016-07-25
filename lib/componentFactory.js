'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = componentFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cxs = require('cxs');

var _cxs2 = _interopRequireDefault(_cxs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function componentFactory(displayName, parentStyleProps, defaultComponent) {
  var compy = function compy(_ref) {
    var children = _ref.children;
    var component = _ref.component;
    var props = _ref.props;

    var styleProps = _objectWithoutProperties(_ref, ['children', 'component', 'props']);

    var Component = component || defaultComponent || 'div';
    var className = void 0;
    if (parentStyleProps || styleProps) {
      className = (0, _cxs2.default)(_extends({}, parentStyleProps, styleProps));
    }
    return _react2.default.createElement(
      Component,
      _extends({}, props, { className: className }),
      children
    );
  };

  compy.displayName = displayName;

  compy.propTypes = {
    children: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func, _react2.default.PropTypes.object]).isRequired,
    props: _react2.default.PropTypes.object
  };

  return compy;
}
module.exports = exports['default'];
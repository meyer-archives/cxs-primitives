'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineFlex = exports.Col = exports.Row = exports.InlineBlock = exports.Inline = exports.Block = exports.Wrapper = undefined;

var _componentFactory = require('./componentFactory');

var _componentFactory2 = _interopRequireDefault(_componentFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = exports.Wrapper = (0, _componentFactory2.default)('Wrapper', {});

var Block = exports.Block = (0, _componentFactory2.default)('Block', { display: 'block' });
var Inline = exports.Inline = (0, _componentFactory2.default)('Inline', { display: 'inline' });
var InlineBlock = exports.InlineBlock = (0, _componentFactory2.default)('InlineBlock', { display: 'inline-block' });

var Row = exports.Row = (0, _componentFactory2.default)('Row', { display: 'flex', flexDirection: 'row' });
var Col = exports.Col = (0, _componentFactory2.default)('Col', { display: 'flex', flexDirection: 'column' });
var InlineFlex = exports.InlineFlex = (0, _componentFactory2.default)('InlineFlex', { display: 'inline-flex' });
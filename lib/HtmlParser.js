'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlParser;

var _htmlparser = require('htmlparser2');

var _processNodes = require('./processNodes');

var _processNodes2 = _interopRequireDefault(_processNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a HTML string and returns a list of React components generated from it
 *
 * @param {String} html The HTML to convert into React component
 * @param {Object} options Options to pass
 * @returns {Array} List of top level React elements
 */
function HtmlParser(html) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$decodeEntities = _ref.decodeEntities,
      decodeEntities = _ref$decodeEntities === undefined ? true : _ref$decodeEntities,
      transform = _ref.transform,
      _ref$preprocessNodes = _ref.preprocessNodes,
      preprocessNodes = _ref$preprocessNodes === undefined ? function (nodes) {
    return nodes;
  } : _ref$preprocessNodes;

  var nodes = preprocessNodes((0, _htmlparser.parseDOM)(html, { decodeEntities: decodeEntities }));
  return (0, _processNodes2.default)(nodes, transform);
}
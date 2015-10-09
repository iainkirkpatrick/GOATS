var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

function render(num) {
  return h('div'), [String(count)];
}

var num = 23;

var tree = render(num);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

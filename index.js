const Parser = require('web-tree-sitter');

(async () => {
  await Parser.init();
  const parser = new Parser();
  const Lang = await Parser.Language.load('tree-sitter-grammar/tree-sitter-grammar.wasm');
  parser.setLanguage(Lang);
  const tree = parser.parse('source s | filter true');
  console.log(tree.rootNode.toString());
})();

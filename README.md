#Steps to reproduce

```bash
 $ cd tree-sitter-grammar
 $ tree-sitter generate
 $ tree-sitter build-wasm
 $ cd ..
 $ npm install
 $ npm start
```

Result:
`RuntimeError: abort(Assertion failed: undefined). Build with -s ASSERTIONS=1 for more info.`

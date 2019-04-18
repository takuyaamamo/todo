'use strict'
const todo = require('./index.js');
const assert = require('assert');

// todo と list のテスト
// todo関数の因数にノートを買うをセット
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

// del のテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');

var all = require('./index')
  , tape = require('tape')

tape.test('All behaves', function(assert) {
  assert.ok(all([1, 2, 3, 4]), 'true array is false')
  assert.ok(!all([0, 1, 2, 3]), 'false array is false')
  assert.ok(!all(['', 'hello', 'woah']), 'false array with strings')
  assert.ok(all('what a wonderful life'), 'a string')
  assert.end()
})

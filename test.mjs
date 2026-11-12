import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('index.html', 'utf8');
test('Bagging contains the exact PM Ink Jet Printer URL', () => {
  assert.ok(html.includes('https://script.google.com/macros/s/AKfycbz_F-JG6m7071JlD0CjVpQgI4LizQ5UpGRxq50BLoARqYqdbdoC5fV06dbNN3y4G5oepQ/exec'));
  assert.ok(html.includes('id="bagging"'));
});
test('Analyzer contains the exact PM Analyzer WTP URL', () => {
  assert.ok(html.includes('https://script.google.com/macros/s/AKfycbyAPldrvvA0jTi4aAw_x7BKKwsfCq8vessqVLIaagWFiKgfkCBCu1vrOXIBKp0r5b0_/exec'));
  assert.ok(html.includes('id="analyzer"'));
});
test('four departments and key modules are present', () => {
  for (const id of ['bagging','analyzer','bfr','warehouse','scheduler','workorders','equipment','reports']) assert.ok(html.includes(`id="${id}"`));
});

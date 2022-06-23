const findLengthOnly = require('./rendercomments.js');

describe('Remove and add Task', () => {
  test('add a task', async () => {
    const r = await findLengthOnly(250);
    expect(r).toBe(10);
  });
});

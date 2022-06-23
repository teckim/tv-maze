const  length =require('./length.js');



describe('Remove and add Task', () => {
    test('add a task', () => {
      expect(length(250)).toBe(10);
    });
  
    test('remove todo', () => {
      expect(store.deleteTodo(1)).toBe(true);
    });
  });
  
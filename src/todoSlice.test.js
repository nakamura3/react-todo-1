import reducer, { addTask } from './todoSlice';

describe('Actions', () => {
  test('addTask Action', () => {
    const task = '買い物';
    const result = addTask(task);
    const expected = {
      type: 'todo/addTask',
      payload: task
    };

    expect(result).toEqual(expected);
  });
});

describe('Reducers', () => {
  describe('addTask Reducer', () => {
    test('初期値', () => {
      const state = undefined;
      const action = {};
      const result = reducer(state, action);
      const expected = {
        tasks: [],
        uniqueId: 0
      };

      expect(result).toEqual(expected);
    });

    test('addTask Action', () => {
      const title1 = 'Reduxを学ぶ';
      const title2 = 'Testを学ぶ';
      const initId = 2;
      const state = {
        tasks: [
          {
            title: title1,
            id: initId
          }
        ],
        uniqueId: initId + 1
      };
      const result = reducer(state, addTask(title2));
      const expected = {
        tasks: [
          {
            title: title1,
            id: initId
          },
          {
            title: title2,
            id: initId + 1
          }
        ],
        uniqueId: initId + 2
      };

      expect(result).toEqual(expected);
    });
  });

})
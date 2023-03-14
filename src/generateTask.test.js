import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { generateTask } from './generateTask';

const mockStore = configureMockStore([thunk]);

test('generateTask Action Creator', () => {
    const title = '買い物';

    // fetch のモック仕様
    fetch.mockResponse(JSON.stringify({
        id: 1,
        title: title
    }));

    // 2つのアクションが発行される
    const expected = [
        {
            type: 'todo/fetchTodoRequest'
        },
        {
            type: 'todo/addTask',
            payload: title
        }
    ];

    // store のモック (getActions() が使える)
    const store = mockStore();
    
    return store.dispatch(generateTask())
            .then(() => {
                expect(store.getActions()).toEqual(expected);
            });
});

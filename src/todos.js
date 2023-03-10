// Ducks 構成のロジック実装

// Action Type
const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';

// Action Creator
export const inputTask = (task) => ({
	type: INPUT_TASK,
	payload: {
		task
	}
});

export const addTask = (task) => ({
	type: ADD_TASK,
	payload: {
		task
	}
});

// Reducer
const initialState = {
	task: '',
	tasks: [],
	uniqueId: 0
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case INPUT_TASK:
			return {
				...state,
				task: action.payload.task
			};
		case ADD_TASK:
			return {
				...state,
				tasks: state.tasks.concat([{title: action.payload.task, id: state.uniqueId }]),
				uniqueId: state.uniqueId + 1
			}
		default:
			return state;
	}
};

export default tasksReducer;
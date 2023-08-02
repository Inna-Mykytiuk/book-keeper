// reducers/tasksReducer.js
import {
  ADD_TASK,
  REMOVE_TASK,
  FILTER_TASKS,
  SEARCH_TASKS,
  UPDATE_TASK_COMPLETION,
  UPDATE_STATISTICS,
} from './actions';

const initialState = {
  tasks: [],
  filter: '',
  searchText: '',
  statistics: {
    completed: [],
    incomplete: [],
  },
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    case SEARCH_TASKS:
      return {
        ...state,
        searchText: action.payload,
      };
    case UPDATE_TASK_COMPLETION:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId
            ? { ...task, completed: action.payload.completed }
            : task
        ),
      };
    case UPDATE_STATISTICS:
      const { status, task } = action.payload;
      return {
        ...state,
        statistics: {
          ...state.statistics,
          [status]:
            status === 'completed'
              ? [...state.statistics.completed, task]
              : [...state.statistics.incomplete, task],
        },
      };
    case 'all':
      return {
        ...state,
        filter: 'all',
      };
    default:
      return state;
  }
};

export default tasksReducer;

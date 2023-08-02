// actions/tasksActions.js
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';
export const SEARCH_TASKS = 'SEARCH_TASKS';
export const UPDATE_TASK_COMPLETION = 'UPDATE_TASK_COMPLETION';
export const UPDATE_STATISTICS = 'UPDATE_STATISTICS';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const filterTasks = filter => ({
  type: FILTER_TASKS,
  payload: filter,
});

export const searchTasks = searchText => ({
  type: SEARCH_TASKS,
  payload: searchText,
});

export const updateTaskCompletion = (taskId, completed) => ({
  type: UPDATE_TASK_COMPLETION,
  payload: { taskId, completed },
});

export const updateStatistics = (status, task) => ({
  type: UPDATE_STATISTICS,
  payload: { status, task },
});

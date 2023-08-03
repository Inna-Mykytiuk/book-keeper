// components/Todo.js
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  addTask,
  removeTask,
  filterTasks,
  searchTasks,
  updateTaskCompletion,
  updateStatistics,
} from '../redux/actions';

const Todo = props => {
  const [taskText, setTaskText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [completedCount, setCompletedCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate the counts based on the current filter value
    const completedTasks = props.tasks.filter(task => task.completed);
    const incompleteTasks = props.tasks.filter(task => !task.completed);
    setCompletedCount(completedTasks.length);
    setIncompleteCount(incompleteTasks.length);
  }, [props.tasks, props.filter]);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        text: taskText,
        completed: false, // Set the default value for completed as false
      };
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };

  const handleFilterTasks = filter => {
    if (filter === 'all') {
      // For "All" filter, set the filter to 'all' directly
      dispatch({ type: 'all' });
    } else {
      dispatch(filterTasks(filter));
    }
  };

  const handleSearchTasks = () => {
    if (searchText.trim() !== '') {
      dispatch(searchTasks(searchText));
    } else {
      // When search text is empty, dispatch a search action with an empty string
      dispatch(searchTasks(''));
    }
  };

  const handleTaskCheckboxChange = (taskId, checked) => {
    // Dispatch an action to update the task's completion status
    dispatch(updateTaskCompletion(taskId, checked));

    // Update the statistics
    const taskToUpdate = props.tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      if (checked) {
        // If the task is checked (completed), add it to the completed statistics
        dispatch(updateStatistics('completed', taskToUpdate));
      } else {
        // If the task is unchecked (incomplete), remove it from the completed statistics
        dispatch(updateStatistics('incomplete', taskToUpdate));
      }
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={() => handleFilterTasks('completed')}>Completed</button>
      <button onClick={() => handleFilterTasks('incomplete')}>
        Active
      </button>
      <button onClick={() => handleFilterTasks('all')}>All</button>
      <div>
        <p>Completed: {completedCount}</p>
        <p>Incomplete: {incompleteCount}</p>
        <p>Total: {props.tasks.length}</p>
      </div>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search Task"
      />
      <button onClick={handleSearchTasks}>Search</button>
      <ul>
        {props.tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={e =>
                handleTaskCheckboxChange(task.id, e.target.checked)
              }
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { tasks, filter, searchText } = state.tasks;
  let filteredTasks = tasks;

  if (filter === 'completed') {
    filteredTasks = filteredTasks.filter(task => task.completed);
  } else if (filter === 'active') {
    filteredTasks = filteredTasks.filter(task => !task.completed);
  }

  if (searchText) {
    filteredTasks = filteredTasks.filter(
      task => task.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }

  return {
    tasks: filteredTasks,
    filter: filter,
  };
};

export default connect(mapStateToProps)(Todo);

// const mapStateToProps = state => {
//   const { tasks, filter } = state.tasks;
//   let filteredTasks = tasks;

//   if (filter === 'completed') {
//     filteredTasks = tasks.filter(task => task.completed);
//   } else if (filter === 'incomplete') {
//     filteredTasks = tasks.filter(task => !task.completed);
//   }

//   return {
//     tasks: filteredTasks,
//     filter: filter,
//   };
// };

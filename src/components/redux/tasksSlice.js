import { createSlice} from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, name, category, date) {
        return {
          payload: {
            date,
            name,
            category,
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    deleteCompleted(state) {
      return state.filter(task => !task.completed);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    updateTask(state, action) {
      const { id, name, text, date, category } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.date = date;
        task.name = name;
        task.text = text;
        task.category = category;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, updateTask, deleteCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

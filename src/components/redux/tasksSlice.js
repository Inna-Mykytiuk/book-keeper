import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, name, category) {
        return {
          payload: {
            name,
            category,
            text,
            // date: new Date().toISOString(), // You can set the date here or pass it as an argument to prepare function
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
        task.name = name;
        task.text = text;
        task.date = date;
        task.category = category;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, updateTask, deleteCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;


    // updateTask(state, action) {
    //   const { id, name, text, date, category } = action.payload;
    //   const task = state.find(task => task.id === id);
    //   if (task) {
    //     task.name = name;
    //     task.text = text;
    //     task.date = date;
    //     task.category = category;
    //   }
    // },

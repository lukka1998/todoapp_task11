import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'REMOVE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'CLEAR_COMPLETED':
      return {
        tasks: state.tasks.filter((task) => !task.completed),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
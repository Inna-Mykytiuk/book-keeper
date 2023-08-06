// import { useDispatch } from "react-redux";
// // import { Button } from "components/Button/Button";
// import { addTask } from "../redux/tasksSlice";
import React, { useState } from 'react';
import ModalForm from "components/ModalForm/ModalForm";


export const TaskForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    setShowModal(true);
    const form = e.target;
    setTaskText(form.elements.text.value);
    form.reset();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      {/* <button type="submit">Add task</button> */}
      <button type='submit'>Add task</button>
    </form>
    {showModal && <ModalForm onClose={handleCloseModal} initialText={taskText}/>}
    </>

  );
};

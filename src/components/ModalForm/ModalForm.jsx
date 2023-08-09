import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/tasksSlice';

import {
  Backdrop,
  ModalContainer,
  Form,
  Field,
  Textarea,
  Label,
  Select,
} from './ModalForm.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const ModalForm = ({ onClose, initialText, initialName, initialCategory, task }) => {

  const [name, setName] = useState(initialName);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [category, setCategory] = useState(initialCategory);

  const dispatch = useDispatch();

  // Function to handle backdrop click
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Function to handle the Escape key press
  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {

    setName(initialName);
    setText(initialText);
    setCategory(initialCategory);
    setDate(task ? (task.date ? task.date.substr(0, 10) : new Date().toISOString().substr(0, 10)) : new Date().toISOString().substr(0, 10));



    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleBackdropClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, initialName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedText = form.elements.text.value;
    const updatedName = form.elements.name.value;

    if (updatedText?.trim() === "") {
      return alert("fill in the field");
    }

    if (task) {
      dispatch(updateTask({ id: task.id, text: updatedText, name: updatedName, date, category }));
    } else {
      dispatch(addTask(updatedText, updatedName, date, category));
    }

    form.reset();
    onClose();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return createPortal(
    <>
      <Backdrop onClick={handleBackdropClick}>
        <ModalContainer>
          <Form onSubmit={handleSubmit}>
            {/* You can add a date input here if needed */}
            <Label htmlFor="date">Date</Label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
            <Field
              type="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter task name..."
            />
            <Textarea
              type="text"
              placeholder="Enter task text..."
              value={text}
              name="text"
              onChange={e => setText(e.target.value)}
            />

            <>
              <Label htmlFor="category">Category</Label>
              <Select
                type="category"
                placeholder="Enter task category..."
                name="category"
                id="category"
                onChange={e => setCategory(e.target.value)}
                value={category}
              >
                <option value="Task">Task</option>
                <option value="Random thoughts">Random thoughts</option>
                <option value="Quote">Quote</option>
                <option value="Idea">Idea</option>
              </Select>
            </>
            <button type="submit">{task ? 'Edit task' : 'Add task'}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </Form>
        </ModalContainer>
      </Backdrop>
    </>,
    modalRoot
  );
};

export default ModalForm;

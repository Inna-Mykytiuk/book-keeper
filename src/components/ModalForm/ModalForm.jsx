import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
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

const ModalForm = ({ onClose, initialText }) => {
  // const [inputData, setInputData] = useState({
  //   title: '',
  //   category: '',
  //   content: '',
  //   dueDate: new Date().toISOString(),
  // });

  const [name, setName] = useState(initialText);
  const [text, setText] = useState('');
  // const [date, setDate] = useState(new Date().toISOString());
  const [category, setCategory] = useState('');

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
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleBackdropClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value; // Get the task text from the form
    const name = form.elements.name.value;
    if (form.elements.text.value?.trim() === '')
      return alert('fill in the field');
    dispatch(addTask(text, name, category));
    form.reset();
    onClose();
  };

  return createPortal(
    <>
      <Backdrop onClick={handleBackdropClick}>
        <ModalContainer>
          <Form onSubmit={handleSubmit}>
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
            {/* You can add a date input here if needed */}

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
            <button type="submit">Add task</button>
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

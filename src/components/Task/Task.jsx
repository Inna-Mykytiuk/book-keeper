import { useDispatch } from "react-redux";
import { useState} from 'react'
// import { MdClose } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Wrapper, Checkbox, Text, Button } from './Task.styled';
import { deleteTask, toggleCompleted } from "../redux/tasksSlice";
import ModalForm from "components/ModalForm/ModalForm";
// import css from "./Task.module.css";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      {/* <Button type="button" onClick={handleToggle}>
        Toggle
      </Button> */}
      <Text>{task.category}</Text>
      <Text>{task.name}</Text>
      <Text>{task.text}</Text>
      {/* <Button type="button" >
        <LuEdit size={24}/>
      </Button> */}

      <Button type="button" onClick={handleEdit}>
        <LuEdit size={24} />
      </Button>
      {/* ... Other elements */}
      {isEditing && (
        <ModalForm onClose={handleCloseEdit} initialText={task.text} initialName={task.name} initialCategory={task.category} task={task}/>
      )}
      <Button type="button" onClick={handleDelete}>
        <RiDeleteBin6Line size={24}/>
      </Button>
    </Wrapper>
  );
};

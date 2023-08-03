import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { Wrapper, Checkbox, Text, Button } from './Task.styled';
import { deleteTask, toggleCompleted } from "../redux/tasksSlice";
// import css from "./Task.module.css";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

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
      <Text>{task.text}</Text>
      <Button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};

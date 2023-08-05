import { useDispatch } from "react-redux";
// import { Button } from "components/Button/Button";
import { addTask } from "../redux/tasksSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value.trim() === "") return alert("fill in the field");
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};

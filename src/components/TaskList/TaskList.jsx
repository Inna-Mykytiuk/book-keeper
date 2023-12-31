import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import { getTasks, getStatusFilter, selectQuery, selectCategory } from "../redux/selectors";
import { statusFilters } from "../redux/constants";
import { List, ListItem, Container } from './TaskList.styled';


const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  const query = useSelector(selectQuery);
  const category = useSelector(selectCategory);

  const visibleTasks = getVisibleTasks(tasks, statusFilter)
    .filter(task => {
      // Existing text query filter
      const textFilter =
        typeof task.text === 'string' &&
        task.text.toLowerCase().includes(query?.trim().toLowerCase());

      // New category filter
      const categoryFilter = !category || task.category === category;

      return textFilter && categoryFilter;
    });

// const visibleTasks = getVisibleTasks(tasks, statusFilter).filter((task) =>
//   typeof task.text === 'string' && task.text.toLowerCase().includes(query?.trim().toLowerCase())
// );

  return (
    <Container>
      <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
    </Container>

  );
};

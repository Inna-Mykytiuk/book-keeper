import { useSelector, useDispatch } from "react-redux";
// import { Button } from "components/Button/Button";
import { statusFilters } from "components/redux/constants";
import { getStatusFilter } from "components/redux/selectors";
import { setStatusFilter } from "../redux/filterSlice";

import { deleteCompleted } from "components/redux/tasksSlice";


export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </button>
      <button onClick={() => dispatch(deleteCompleted())}>
        Delete completed
      </button>
    </div>
  );
};

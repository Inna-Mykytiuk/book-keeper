import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectQuery, selectCategory } from 'components/redux/selectors';
import { setQuery, setCategory } from 'components/redux/filterSlice';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const category = useSelector(selectCategory);

  const [queryValue, setQueryValue] = useState(query);

  useEffect(() => {
    const value = queryValue?.trim().toLowerCase();
    if (value !== query) {
      dispatch(setQuery(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryValue]);

  // [dispatch, query, queryValue]

  const getQueryHandler = e => {
    const { value } = e.currentTarget;
    if (value !== queryValue) {
      setQueryValue(value);
    }
  };

  const getCategoryHandler = e => {
    const { value } = e.currentTarget;
    if (value !== category) {
      dispatch(setCategory(value)); // Dispatch the new category value
    }
  };

  const resetHandler = () => {
    setQueryValue('');
    dispatch(setCategory(null)); // Reset the category filter
  };

  return (
    <div>
      <label htmlFor="query">Enter task text</label>
      <input
        id="query"
        type="text"
        name="query"
        value={queryValue}
        placeholder="Enter a task text..."
        onChange={getQueryHandler}
        autoComplete="off"
      />
      <label htmlFor="category">Category</label>
      <select
        value={category || ''} // Use the selected category value
        onChange={getCategoryHandler}
        id="category"
      >
        <option value="">All</option>
        <option value="Task">Task</option>
        <option value="Random thoughts">Random thoughts</option>
        <option value="Quote">Quote</option>
        <option value="Idea">Idea</option>
      </select>
      <button type="button" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

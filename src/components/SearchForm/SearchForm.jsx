import React, { useState, useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { selectQuery } from 'components/redux/selectors';
import { setQuery } from 'components/redux/filterSlice';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const [queryValue, setQueryValue] = useState(query);

  useEffect(() => {
    const value = queryValue.trim().toLowerCase();
    if (value !== query) {
      dispatch(setQuery(value));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryValue]);

  // [dispatch, query, queryValue]

  const getQueryHandler = (e) => {
    const { value } = e.currentTarget;
    if (value !== queryValue) {
      setQueryValue(value);
    }
  };


  const resetHandler = () =>
    setQueryValue('');

  return (

      <div>
        <label htmlFor="query" >
          Enter task text
        </label>
        <input
          id="query"
          type="text"
          name="query"
          value={queryValue}
          placeholder="Enter a task text..."
          onChange={getQueryHandler}

          autoComplete="off"
        />
        <button
          type="button"

          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
  );
};

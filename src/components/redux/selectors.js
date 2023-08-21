//Tasks selectors
export const getTasks = state => state.tasks;

// export const selectTotal = state => state.tasks.total;

// export const selectIsLoading = state => state.tasks.isLoading;

// export const selectError = state => state.tasks.error;


//Filter selectors
export const getStatusFilter = state => state.filters.status;

export const selectQuery = state => state.filters.query;

export const selectPage = state => state.filters.page;

export const selectCategory = state => state.filters.category;

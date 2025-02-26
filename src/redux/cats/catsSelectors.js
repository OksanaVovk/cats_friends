const selectCats = state => state.cats.data;
const selectCatsIsLoading = state => state.cats.isLoading;
const selectCatsError = state => state.cats.error;

export const catsSelectors = {
  selectCats,
  selectCatsIsLoading,
  selectCatsError,
};

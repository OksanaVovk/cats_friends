const selectVolonteers = state => state.volonteers.data;
const selectVolonteersIsLoading = state => state.volonteers.isLoading;
const selectVolonteersError = state => state.volonteers.error;

export const volonteersSelectors = {
  selectVolonteers,
  selectVolonteersIsLoading,
  selectVolonteersError,
};

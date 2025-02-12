const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsFetchingCurrentUser = state => state.auth.isFechingCurrentUser;
const selectUser = state => state.auth.user;

export const authSelector = {
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
  selectUser,
};

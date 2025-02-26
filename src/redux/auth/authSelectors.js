const selectIsLoggedIn = state => state.authCats.isLoggedIn;
const selectIsFetchingCurrentUser = state =>
  state.authCats.isFechingCurrentUser;
const selectUser = state => state.authCats.user;

export const authSelector = {
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
  selectUser,
};

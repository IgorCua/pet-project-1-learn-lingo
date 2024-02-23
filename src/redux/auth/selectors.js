export const selectUserID = state => state.auth.userID;
export const selectUserName = state => state.auth.userName;
export const selectUserEmail = state => state.auth.userEmail;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserFavoritesStr = state => state.auth.userFavoritesStr;
export const selectUserFavoriteTeachersObj = state => state.auth.userFavoriteTeachersObj;
// const initialState = {
//     userName: null,
//     userEmail: null,
//     token: null,
//     isLoggedIn: null,
//     isLoading: false,
//     error: null
// }
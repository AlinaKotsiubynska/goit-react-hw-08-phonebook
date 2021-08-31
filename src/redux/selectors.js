export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getLoading = state => state.contacts.loading;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;
export const getUserName = state => state.auth.name;

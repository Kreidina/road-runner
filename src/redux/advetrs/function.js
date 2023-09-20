export const handelPending = (state) => {
  state.isLoading = true;
};

export const handelReject = (state) => {
  state.isLoading = false;
};
export const handelFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.adverts = payload;
};
export const handelAllFav = (state, { payload }) => {
  state.isLoading = false;
  state.favorites = payload;
};
export const handelAddFav = (state, { payload }) => {
  state.isLoading = false;
  state.favorites.push(payload);
};
export const handelDelete = (state, { payload }) => {
  state.isLoading = false;
  state.favorites = state.favorites.filter((item) => item.id !== payload.id);
};

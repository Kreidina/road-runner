export const handelPending = (state) => {
  state.isLoading = true;
};

export const handelReject = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
};
export const handelFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.adverts = payload;
};

export const login = (state, payload) => {
  state.token = payload.token;
  state.isAuthenticated = true;
}

export const clear = (state) => {
  state.token = "";
  state.isAuthenticated = false;
}

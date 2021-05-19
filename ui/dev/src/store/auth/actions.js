import axios from "axios";

export const login = async ({ commit }, payload) => {
  const data = {
    auth: { email: payload.email, password: payload.password },
  };
  console.log(data)
  let response = "";
  try {
    response = await axios.post("https://api.sowellapp.com/tokens", data);
    if (response.status == "201") {
      commit('login', { token: response.data.jwt });
    }
  } catch (err) {
    commit('clear');
  }
}

import axios from "axios";

// Set data
export const setData = ({ commit }, payload) => {
  commit("mutate", payload);
};

export const fetchData = async ({ rootState, commit }, payload) => {
  try {
    let response = await axios.get(
      `https://jimwib.github.io/nfl-data/data/${payload.url}.json`
    );
    if (payload.commit) {
      console.log(payload);
      commit("mutate", {
        property: payload.stateProperty,
        key: payload.key,
        with: response.data
      });
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

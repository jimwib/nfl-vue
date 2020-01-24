// Get data
export const getData = state => payload => {
  if (payload.key) {
    return state[payload.property][payload.key];
  } else {
    return state[payload.property];
  }
};

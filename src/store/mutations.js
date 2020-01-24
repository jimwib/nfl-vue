// Commit data
export const mutate = (state, payload) => {
  if (payload.key) {
    state[payload.property][payload.key] = payload.with;
  } else {
    state[payload.property] = payload.with;
  }
};

const actions = {
  DEFAULT_ACTION: '@main/DEFAULT',
};

export default actions;

export function defaultAction(payload) {
  return {
    type: actions.DEFAULT_ACTION,
    payload: { payload },
  };
}

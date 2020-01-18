import produce from 'immer';
import actions from './actions';

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actions.DEFAULT_ACTION: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

const initState = {
  num: 0,
};

function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

export default {
  namespace: "home",
  state: initState,
  reducers: {
    add(state = initState, { type, payload }) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    * asyncAdd({ payload }, { call, put }) {
      yield call(delay);
      yield put({
        type: "add",
        payload,
      });
    },
  },
  subscription: "",
};


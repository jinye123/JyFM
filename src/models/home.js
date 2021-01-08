const initState = {
  num: 0,
};
export default {
  namespace: "home",
  state: initState,
  reducers: {
    add(state, { type, payload }) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    asyncAdd() {

    },
  },
  subscription: "",
};


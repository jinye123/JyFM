import { getHomeList } from "../api";

const initState = {
  banners: [],
};

export default {
  namespace: "home",
  state: initState,
  reducers: {
    setState(state = initState, { type, payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * getHomeData(_, { call, put }) {
      const { bannersList } = yield call(getHomeList);
      yield put({
        type: "setState",
        payload: {
          banners: bannersList
        },
      });
    },
  },
  subscription: "",
};


import { getHomeList, getActivityList } from "../api";

const initState = {
  bannersList: [],
  jhList: [],
  gkList: [],
  trainingCamp: null,
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
      const { bannersList, typeVo } = yield call(getHomeList);
      const [ trainingCamp, groupList ] = yield call(getActivityList);
      yield put({
        type: "setState",
        payload: {
          bannersList: bannersList,
          jhList: typeVo[0],
          gkList: typeVo[1],
          trainingCamp: trainingCamp,
        },
      });
    },
  },
  subscription: "",
};


import storage, { load } from "../config/storage";
import { getCategoryList } from "../api";

const initState = {
  myCategories: [
    {
      id: "home",
      name: "推荐",
    },
    {
      id: "vip",
      name: "Vip",
    },
  ],
  categories: [],
};

export default {
  namespace: "category",
  state: initState,
  reducers: {
    setState: (state = initState, { type, payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * loadDate(_, { call, put }) {
      // 从storage获取数据
      const myCategories = yield call(load, { key: "myCategories" });
      const categories = yield call(load, { key: "categories" });
      if (myCategories) {
        yield put({
          type: "setState",
          payload: {
            myCategories,
            categories,
          },
        });
      } else {
        yield put({
          type: "setState",
          payload: {
            categories,
          },
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: "loadDate" });
    },
    asyncStorage() {
      storage.sync.categories =  async () => {
        const data=await getCategoryList()
        return data;
      };
      storage.sync.myCategories = () => {
        return null;
      };
    },
  },
};

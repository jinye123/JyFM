import { getCoursesInf } from "../api";


const initState = {
  activityState: '',
  categoryId: '',
  count: 0,
  createTime: "",
  describe: "",
  discourse: "",
  id: '',
  isVip: '',
  price: '',
  purl: "",
  resourse: "",
  status: 0,
  stepInfoPage: {
    content: [],
    numberOfElements: '',
    totalElements: '',
  },
  subTitle: '',
  title: '',
  type: '',
  userState: '',
};
export default {
  namespace: "album",
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
    * fetchAlbum({payload}, { call, put }) {
      const {coursesDetail} = yield call(getCoursesInf,payload.id)
      console.log(coursesDetail);
      yield put({
        type:'setState',
        payload:coursesDetail
      })
    },
  },
  subscriptions: {},
};

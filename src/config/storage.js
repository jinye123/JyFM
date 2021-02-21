import AsyncStorage from "@react-native-community/async-storage";
import Storage from "react-native-storage";

const storage = new Storage({
  size: 1000, //最大容量
  storageBackend: AsyncStorage, //数据引擎 可以选择window
  defaultExpires: 1000 * 3600 * 24 * 7,//过期时间 null 为永不过期
  sync: {}, //数据过期调用里面的方法
});

const load = (params) => {
  return storage.load(params);
};

export default { load, storage };

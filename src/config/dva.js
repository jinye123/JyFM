import { create } from "dva-core";
import createLoading from 'dva-loading';
import models from "@/models";
import homeModel from '../models/home'
import modelExtend from 'dva-model-extend';
//创建实例
const app = create();
// 加载model对象
models.forEach(model => {
  app.model(model);
});
app.use(createLoading())
// 启动dva
app.start();
// 导出dva
export default app._store;

function createHomeModel(namespace){
  const model=modelExtend(homeModel,{namespace})
  app.model(model)
}

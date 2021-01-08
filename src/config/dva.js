import { create } from "dva-core";
import models from "@/models";
//创建实例
const app = create();
// 加载model对象
models.forEach(model => {
  app.model(model);
});
// 启动dva
app.start();
// 导出dva
export default app._store;

/**
 * 页面头部背景图片的路由
 * 
 */
const Router = require("koa-router");
const router = new Router({ prefix: "/pageHeader" });

const { addOrUpdateHeader, deleteHeader, getAllHeader } = require("../controller/header/index");

// 根据是否有id来判断新增/编辑背景
router.post("/addOrUpdate", addOrUpdateHeader);

// 删除背景
router.post("/delete", deleteHeader);

// 根据相册id 获取相册的所有图片
router.get("/getAll", getAllHeader);

module.exports = router;

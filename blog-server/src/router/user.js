/**
 * 用户相关路由
 */
const Router = require("koa-router");
const router = new Router({ prefix: "/user" });

const { login, register, updateOwnUserInfo, updatePassword, updateRole, getUserList, getUserInfo, adminUpdateUserInfo } = require("../controller/user");

const { userValidate, verifyUser, crpyPassword, verifyLogin, verifyUpdatePassword } = require("../middleware/user/index");

// 用户注册
router.post("/register", userValidate, verifyUser, crpyPassword, register);
// 用户登陆
router.post("/login", userValidate, verifyLogin, login);
// 用户修改个人用户信息
router.put("/updateOwnUserInfo", updateOwnUserInfo);
// 修改密码
router.put("/updatePassword", verifyUpdatePassword, updatePassword);
// 管理员修改用户角色
router.put("/updateRole/:id/:role", updateRole);
// 管理员修改用户信息
router.put("/adminUpdateUserInfo",adminUpdateUserInfo);

// 分页获取用户列表
router.post("/getUserList", getUserList);

// 根据用户id获取用户信息
router.get("/getUserInfoById/:id", getUserInfo);

module.exports = router;

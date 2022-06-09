import { get } from "./http";
const userInfoApi = {
  getUserInfo: () => get("/api/user/getUserList"),
};

export default userInfoApi;

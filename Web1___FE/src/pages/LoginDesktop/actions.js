import api from "utils/service/api";

export const actionGetDataBase1 = () => {
  return api({
    method: "GET",
    url: "/api/get-all-user",
  });
};
export const actionGetDataBase2 = () => {
  return api({
    method: "GET",
    url: "/api/get-all-user2",
  });
};

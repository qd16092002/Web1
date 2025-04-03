import api from "utils/service/api";

export const actionGetUserById = (userId) => {
  return api({
    method: "GET",
    url: `/api/get-user-profile-by-id/${userId}`,
  });
};

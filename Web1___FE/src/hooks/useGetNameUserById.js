import { useEffect, useState } from "react";
import { actionGetUserById } from "./actions";

export const useFetchNameUser = (userId, setSpinning) => {
  const [userNames, setUserNames] = useState({});
  // Lây danh sách
  const handleGetUserById = async (userId) => {
    setSpinning(true);
    try {
      const { data, status } = await actionGetUserById(userId);
      if (status === 200) {
        setUserNames((prevNames) => ({
          ...prevNames,
          [userId]: data,
        }));
      }
    } catch (error) {
      console.log(error);
    }
    setSpinning(false);
  };
  useEffect(() => {
    handleGetUserById(userId);
  }, [userId]);
  return { userNames };
};

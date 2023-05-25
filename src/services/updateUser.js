import { axiosInstance } from "../api/axiosInstance";

export const updateUser = async (id, newUserData) => {
  try {
    await axiosInstance.put(`users/${id}/`, newUserData);
  } catch (error) {
    console.error(error);
  }
};

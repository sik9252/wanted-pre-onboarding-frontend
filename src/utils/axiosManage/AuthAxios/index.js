import { useAxios } from "../useAxios";

/** 회원가입 요청 */
export const signUpRequest = async (inputData) => {
  return await useAxios.post(`/auth/signup`, inputData);
};

/** 로그인 요청 */
export const signInRequest = async (inputData) => {
  return await useAxios.post(`/auth/signin`, inputData);
};

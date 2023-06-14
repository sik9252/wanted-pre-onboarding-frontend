/** 로그인된 상태인지 검사 */
export const checkAuth = () => {
  if (localStorage.getItem("access_token") !== null) {
    return true;
  } else {
    return false;
  }
};

export const checkEmailValidate = (email) => {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
};

export const checkPasswordValidate = (password) => {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

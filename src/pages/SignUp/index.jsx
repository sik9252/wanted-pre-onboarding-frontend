import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** components */
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

/** styles */
import { SignUpContainer, Title, InputBox, ButtonBox } from "./style";

/** axios */
import { signUpRequest } from "../../utils/axiosManage/AuthAxios";

/** other utils */
import {
  checkEmailValidate,
  checkPasswordValidate,
} from "../../utils/InputManage/checkInputValidate";

function SignUp() {
  const navigate = useNavigate();

  // 입력한 데이터 유효성 검증 여부
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isAllValidateChecked, setIsAllValidateChecked] = useState(false);

  // 유저가 입력한 이메일
  const [userEmail, setUserEmail] = useState("");
  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  // 유저가 입력한 비밀번호
  const [userPassword, setUserPassword] = useState("");
  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  // 유저가 이메일, 비밀번호를 입력할때마다 유효성 검증
  useEffect(() => {
    if (checkEmailValidate(userEmail)) {
      setIsValidatedEmail(true);
    } else {
      setIsValidatedEmail(false);
    }

    if (checkPasswordValidate(userPassword)) {
      setIsValidatedPassword(true);
    } else {
      setIsValidatedPassword(false);
    }
  }, [userEmail, userPassword]);

  useEffect(() => {
    if (isValidatedEmail && isValidatedPassword) {
      setIsAllValidateChecked(true);
    } else {
      setIsAllValidateChecked(false);
    }
  }, [isValidatedEmail, isValidatedPassword]);

  // 회원가입 폼 제출 함수
  const clickSignUpButton = () => {
    if (isAllValidateChecked) {
      const inputData = {
        email: userEmail,
        password: userPassword,
      };

      signUpRequest(inputData)
        .then((res) => {
          if (res) {
            alert("회원가입이 완료되었습니다!");
            navigate("/signin");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <InputBox>
        <div>
          <Input
            data-testid="email-input"
            placeholder={"이메일"}
            onChange={onChangeUserEmail}
          />
        </div>
        <div>
          <Input
            data-testid="password-input"
            type={"password"}
            placeholder={"비밀번호 (8자리 이상)"}
            onChange={onChangeUserPassword}
          />
        </div>
      </InputBox>
      <ButtonBox>
        <Button
          data-testid="signup-button"
          width={200}
          height={40}
          isAllValidateChecked={isAllValidateChecked}
          onClick={() => clickSignUpButton()}
        >
          회원가입
        </Button>
      </ButtonBox>
    </SignUpContainer>
  );
}

export default SignUp;

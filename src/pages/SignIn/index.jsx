import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

/** components */
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

/** styles */
import {
  SignInContainer,
  Title,
  InputBox,
  ButtonBox,
  GotoSignUp,
} from "./style";

/** axios */
import { signInRequest } from "../../utils/axiosManage/AuthAxios";

/** other utils */
import {
  checkEmailValidate,
  checkPasswordValidate,
} from "../../utils/InputManage/checkInputValidate";
import { checkAuth } from "../../utils/AuthManage";

function SignIn() {
  const navigate = useNavigate();

  // 로그인된 상태인지 검사
  useEffect(() => {
    if (checkAuth()) {
      navigate("/todo");
    }
  }, []);

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
  const clickSignInButton = () => {
    if (isAllValidateChecked) {
      const inputData = {
        email: userEmail,
        password: userPassword,
      };

      signInRequest(inputData)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          navigate("/todo");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  return (
    <SignInContainer>
      <Title>로그인</Title>
      <InputBox>
        <div>
          <Input
            data_testid="email-input"
            placeholder={"이메일"}
            onChange={onChangeUserEmail}
          />
        </div>
        <div>
          <Input
            data_testid="password-input"
            type={"password"}
            placeholder={"비밀번호 (8자리 이상)"}
            onChange={onChangeUserPassword}
          />
        </div>
      </InputBox>
      <ButtonBox>
        <Button
          data_testid="signin-button"
          width={200}
          height={40}
          isAllValidateChecked={isAllValidateChecked}
          onClick={() => clickSignInButton()}
        >
          로그인
        </Button>
      </ButtonBox>
      <GotoSignUp>
        아직 회원이 아니신가요? <Link to="/signup">회원가입 하러가기</Link>
      </GotoSignUp>
    </SignInContainer>
  );
}

export default SignIn;

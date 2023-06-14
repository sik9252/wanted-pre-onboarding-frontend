import React from "react";

/** components */
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ErrorBox } from "../../components/ErrorBox";

/** styles */
import { SignUpContainer, Title, InputBox, ButtonBox } from "./style";

function SignUp() {
  // 회원가입 폼 제출
  const clickSignUpButton = () => {
    console.log("rer");
  };

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <InputBox>
        <div>
          <Input data-testid="email-input" placeholder={"이메일"} />
          <ErrorBox>올바르지 않은 이메일 형식입니다.</ErrorBox>
        </div>
        <div>
          <Input
            data-testid="password-input"
            type={"password"}
            placeholder={"비밀번호"}
          />
          <ErrorBox>비밀번호는 8자리 이상입니다.</ErrorBox>
        </div>
      </InputBox>
      <ButtonBox>
        <Button
          data-testid="signup-button"
          width={200}
          height={40}
          isDisabled={true}
          onClick={clickSignUpButton}
        >
          회원가입
        </Button>
      </ButtonBox>
    </SignUpContainer>
  );
}

export default SignUp;

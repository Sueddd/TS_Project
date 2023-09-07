import { styled } from "styled-components";
import { Auto, MainBackColor, MainColor } from "../../../style/common";

const SignUp: React.FC = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.InputWrapper>
          <S.InputTitle>Email</S.InputTitle>
          <S.Input placeholder="ex) summer123@naver.com"></S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Password</S.InputTitle>
          <S.Input placeholder="password"></S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Password Confirm</S.InputTitle>
          <S.Input placeholder="password confirm"></S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Nick Name</S.InputTitle>
          <S.Input placeholder="nick name"></S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Address</S.InputTitle>
          <S.Input placeholder="address"></S.Input>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Phone</S.InputTitle>
          <S.Input placeholder="phone-number"></S.Input>
        </S.InputWrapper>
        <Btn>Sign-in</Btn>
      </S.Container>
    </>
  );
};

export default SignUp;
const GoSigin = styled.div`
  border: none;
  ${Auto}
  ${MainColor}
  font-size: 15px;
  cursor: pointer;
  margin-top: 14px;
`;
const Btn = styled.button`
  ${MainBackColor};
  border: none;
  width: 353px;
  height: 40px;
  ${Auto}
  margin-top: 30px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  ${Auto}
  margin-top: 20px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c1c1c1;
  }
`;

const InputTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #4d4c4c;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 350px;
  padding-bottom: 9px;
  ${Auto}
  margin-top: 20px;
`;

const Container = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  width: 450px;
  height: 630px;
  ${Auto}
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const S = {
  Container,
  Input,
  InputWrapper,
  InputTitle,
  Btn,
};

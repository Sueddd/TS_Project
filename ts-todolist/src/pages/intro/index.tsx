import React from "react";
import styled from "styled-components";
import { Auto, MainBackColor, MainColor, MainFont } from "../../style/common";
import { useNavigate } from "react-router-dom";

// html을 리턴하니까 JSX.Element로 타입 주기
const Intro = () => {
  const nav = useNavigate();
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>WELCOME TO HEELOG</S.Title>
        </S.Wrapper>
        <S.Wrapper>
          <S.Btn
            onClick={() => {
              nav(`/signin`);
            }}
          >
            LOGIN
          </S.Btn>
          <S.Btn
            onClick={() => {
              nav(`/signup`);
            }}
          >
            SIGN-IN
          </S.Btn>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Intro;

const Container = styled.div`
  margin-top: 250px;
`;
const Title = styled.div`
  ${MainFont};
  ${MainColor};
  font-weight: bold;
  font-size: 60px;
  ${Auto}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Btn = styled.button`
  ${MainBackColor};
  border: none;
  width: 500px;
  height: 40px;
  ${Auto}
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const S = {
  Container,
  Title,
  Wrapper,
  Btn,
};

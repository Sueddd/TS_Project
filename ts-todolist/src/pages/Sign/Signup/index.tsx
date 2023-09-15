import { styled } from "styled-components";
import { Auto, MainBackColor, MainColor } from "../../../style/common";
import { useForm } from "react-hook-form";
import { PostList } from "../../../mocks/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckList } from "../../../consts/signuparray";
import OneInput from "./oneInput";
import { SignSchema } from "../../../consts/signupSchema";

const SignUp = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignSchema),
    mode: "onChange",
  });

  return (
    <>
      <S.Container>
        {CheckList.map((v) => {
          return (
            <>
              <InputWrapper>
                <Word>{v.title}</Word>
                <OneInput
                  name={v.name}
                  placeholder={v.placeholder}
                  control={control}
                  errors={errors}
                />
              </InputWrapper>
            </>
          );
        })}
        <Btn>Sign-in</Btn>
      </S.Container>
    </>
  );
};

export default SignUp;
const Word = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #4d4c4c;
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

const Container = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  width: 450px;
  height: 460px;
  ${Auto}
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const S = {
  Container,
  InputWrapper,
  Btn,
};

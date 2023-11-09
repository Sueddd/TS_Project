import { styled } from "styled-components";
import { Auto, MainBackColor } from "../../style/common";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OneController from "./onecontroller";
import { Schema } from "../../consts/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { PostList } from "../../mocks/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import { addPost } from "../../action/crud_action";
import { AddModalProps } from "../../action/types";

const AddModal: React.FC<AddModalProps> = ({
  setIsOpen,
  dataList,
  setDataList,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
  });

  const addData = useSelector((state: RootState) => state.post.addData);
  const dispatch = useDispatch();

  const onSubmit = (data: PostList) => {
    dispatch(addPost(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <CloseBtn onClick={() => setIsOpen(false)}>x</CloseBtn>
          <S.InputWrapper>
            <S.Word>ID</S.Word>
            <OneController
              name="id"
              control={control}
              errors={errors}
              placeholder="아이디를 입력해 주세요"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Word>TITLE</S.Word>
            <OneController
              name="title"
              control={control}
              errors={errors}
              placeholder="제목을 입력해 주세요"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Word>DESCRIPTION</S.Word>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <DescriptionInput
                  {...field}
                  placeholder="내용을 입력해 주세요"
                />
              )}
            />
            {errors.description && (
              <ErrorBox>{errors.description.message}</ErrorBox>
            )}
          </S.InputWrapper>
          <Btn type="submit">ADD</Btn>
        </S.Container>
      </form>
    </>
  );
};

export default AddModal;

const CloseBtn = styled.button`
  width: 22px;
  height: 22px;
  align-items: center;
  border: none;
  background-color: white;
  margin-left: 420px;
  padding-bottom: 10px;
`;

const ErrorBox = styled.div`
  color: #fe6161;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
`;

const Btn = styled.button`
  ${MainBackColor};
  border: none;
  width: 406px;
  height: 40px;
  ${Auto}
  margin-top: 35px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  margin-top: 30px;
  margin-left: 23px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c1c1c1;
  }
`;

const DescriptionInput = styled.input`
  border: 1px solid #d8d8d8;
  width: 400px;
  height: 150px;
`;
const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 400px;
`;

const Word = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Container = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  width: 450px;
  height: 660px;
  ${Auto}
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
const S = {
  Container,
  Word,
  InputWrapper,
  DescriptionInput,
};

import { styled } from "styled-components";
import { Auto, MainBackColor } from "../../style/common";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OneController from "./onecontroller";
import { Schema } from "../../consts/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { PostList } from "../../mocks/api";

const AddModal = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
  });

  // const [imgSrc, setImgSrc]: any = useState(null);
  // const onUpload = (e: any) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   return new Promise<void>((resolve) => {
  //     reader.onload = () => {
  //       const src = reader.result;
  //       setImgSrc(reader.result || null); // 파일의 컨텐츠
  //       resolve();
  //     };
  //   });
  // };

  const onSubmit = (data: PostList) => {
    console.log(data);
    axios.post<PostList>("/datas", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.InputWrapper>
            <S.Word>IMAGE</S.Word>
            {/* <input
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => onUpload(e)}
            ></input> */}
            <ImgContainer>
              <div>{/* <Img width={"50%"} src={imgSrc}></Img> */}</div>
            </ImgContainer>
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
          <Btn>ADD</Btn>
        </S.Container>
      </form>
    </>
  );
};

export default AddModal;

const ErrorBox = styled.div`
  color: #fe6161;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const ImgContainer = styled.div`
  display: flex;
  div {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin-top: 0px;
    /* margin-left: 30px; */
  }
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
  /* border: 1px solid black; */
  /* ${Auto} */
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
  height: 600px;
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

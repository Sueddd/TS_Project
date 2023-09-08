import { styled } from "styled-components";
import { Auto, MainBackColor } from "../../style/common";
import { useState } from "react";

const AddModal = (): JSX.Element => {
  const [imgSrc, setImgSrc]: any = useState(null);

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const src = reader.result;
        setImgSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <>
      <S.Container>
        <S.InputWrapper>
          {/** 사진 파일 등록 */}
          <S.Word>IMAGE</S.Word>
          <input
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => onUpload(e)}
          ></input>
          <ImgContainer>
            <div>
              +<img width={"50%"} src={imgSrc}></img>
            </div>
            <div>
              +<img width={"50%"} src={imgSrc}></img>
            </div>
            <div>
              +<img></img>
            </div>
          </ImgContainer>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Word>TITLE</S.Word>
          <TitleInput placeholder="제목을 입력해 주세요"></TitleInput>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Word>DESCRIPTION</S.Word>
          <S.DescriptionInput></S.DescriptionInput>
        </S.InputWrapper>
        <Btn>ADD</Btn>
      </S.Container>
    </>
  );
};

export default AddModal;
const ImgContainer = styled.div`
  display: flex;
  div {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin-left: 30px;
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
  ${Auto}
  margin-top: 30px;
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

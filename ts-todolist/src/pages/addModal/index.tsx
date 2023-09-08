import { styled } from "styled-components";
import { Auto } from "../../style/common";

const AddModal = (): JSX.Element => {
  return (
    <>
      <S.Container>
        {/** 사진 파일 등록 */}
        <div>IMAGE</div>
        <input type="file"></input>
        <div>TITLE</div>
        <input></input>
        <div>DESCRIPTION</div>
        <input></input>
      </S.Container>
    </>
  );
};

export default AddModal;

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
};

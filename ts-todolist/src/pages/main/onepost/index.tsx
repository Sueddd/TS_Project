import styled from "styled-components";

type OnePostProps = {
  data: {
    title: string;
    description: string;
    // img: string
  };
};

const OnePost: React.FC<OnePostProps> = ({ data }): JSX.Element => {
  return (
    <>
      <Container>
        <Img
        // src={data.img} width={50}
        ></Img>
        <Wrapper>
          <BtnWrapper>
            <Btn>edit</Btn>
            <Btn>delete</Btn>
          </BtnWrapper>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
        </Wrapper>
      </Container>
    </>
  );
};
export default OnePost;
const BtnWrapper = styled.div`
  width: 110px;
  margin-left: 350px;
`;

const Btn = styled.button`
  background-color: pink;
  color: black;
  border: none;
  margin-left: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const Description = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 12px;
`;
const Title = styled.div`
  font-size: 20px;
  color: pink;
`;

const Wrapper = styled.div`
  margin: 20px;
  width: 450px;
  height: 150px;
`;

const Container = styled.div`
  width: 800px;
  height: 200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  background-color: black;
`;
const Img = styled.img`
  margin-left: 25px;
  width: 300px;
  height: 150px;
  background-color: white;
`;

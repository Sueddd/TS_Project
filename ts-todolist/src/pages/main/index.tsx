import { useEffect, useState } from "react";
import OnePost from "./onepost";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostList } from "../../mocks/api";

const Main = (): JSX.Element => {
  const [dataList, setDataList] = useState<PostList[]>([]);
  const nav = useNavigate();
  
  useEffect(() => {
    axios.get("/datas").then((res) => setDataList(res.data));
  }, []);

  return (
    <>
      <Container>
        <Btn onClick={() => nav("/addpost")}>ADD POST</Btn>
        {dataList.map((v, index) => (
          <OnePost key={index} data={v} />
        ))}
      </Container>
    </>
  );
};

export default Main;
const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;
const Btn = styled.button`
  background-color: pink;
  border: none;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  font-size: 17px;
  position: relative;
  left: 650px;
  font-weight: bold;
  cursor: pointer;
`;

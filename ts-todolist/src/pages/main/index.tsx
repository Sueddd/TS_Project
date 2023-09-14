import React, { useEffect, useState } from "react";
import OnePost from "./onepost";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostList } from "../../mocks/api";

const Main = () => {
  const [dataList, setDataList] = useState<PostList[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get<PostList[]>("/datas").then((res) => setDataList(res.data));
  }, []);

  // 타입에 data들어가 있던 거 빼기. 
  return (
    <>
      <Container>
        <Btn onClick={() => nav("/addpost")}>ADD POST</Btn>
        {dataList.map((v, index) => (
          <OnePost key={index} postdata = {v}/>
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

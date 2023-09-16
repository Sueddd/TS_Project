import React, { useEffect, useState } from "react";
import OnePost from "./onepost";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostList } from "../../mocks/api";
import AddModal from "../addModal";

const Main: React.FC = () => {
  const [dataList, setDataList] = useState<PostList[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    axios.get<PostList[]>("/datas").then((res) => setDataList(res.data));
  }, []);

  const deletePost = (id: number) => {
    setDataList(dataList.filter((v) => v.id !== id));
  };

  const editPost = (id: number, title: string, description: string) => {
    const _dataList = [...dataList];
    const post = _dataList.find((v) => v.id === id);
    if (post !== undefined) {
      post.title = title;
      post.description = description;
    }
    setDataList(_dataList);
  };

  // 타입에 data들어가 있던 거 빼기.
  return (
    <>
      <Container>
        <Btn onClick={() => setIsOpen(true)}>ADD POST</Btn>
        {dataList.map((v, index) => (
          <OnePost
            key={index}
            postdata={v}
            onDelete={() => deletePost(v.id)}
            editPost={editPost}
          />
        ))}
        {isOpen && (
          <AddModal
            setIsOpen={setIsOpen}
            dataList={dataList}
            setDataList={setDataList}
          />
        )}
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

import React, { useEffect, useState } from "react";
import OnePost from "./onepost";
import axios from "axios";
import styled from "styled-components";
import { PostList } from "../../mocks/api";
import AddModal from "../addModal";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import { useDispatch } from "react-redux";
import { deletePost } from "../../action/crud_action";

const Main: React.FC = () => {
  const addData = useSelector((state: RootState) => state.post.addData);
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState<PostList[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    axios.get<PostList[]>("/datas").then((res) => setDataList(res.data));
  }, []);

  const deletePosts = (id: number) => {
    // setDataList(dataList.filter((v) => v.id !== id));
    const postData = addData.find((v) => v.id === id);
    if (postData) {
      dispatch(deletePost(postData));
    }
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

  return (
    <>
      <Container>
        <Btn onClick={() => setIsOpen(true)}>ADD POST</Btn>
        {addData.map((v, index) => (
          <OnePost
            key={index}
            postdata={v}
            onDelete={() => deletePosts(v.id)}
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

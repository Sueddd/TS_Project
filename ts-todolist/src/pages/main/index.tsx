import { useEffect, useState } from "react";
import OnePost from "./onepost";
import axios from "axios";

const Main = (): JSX.Element => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios.get("/datas").then((res) => setDataList(res.data));
  }, []);

  return (
    <>
      {dataList.map((v, index) => (
        <OnePost key={index} data={v} />
      ))}
    </>
  );
};
export default Main;

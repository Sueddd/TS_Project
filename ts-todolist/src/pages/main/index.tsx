import OnePost from "./onepost";

const Main = (): JSX.Element => {
  type OneProps = {
    list: {
      title: string;
      description: string;
    }[];
  };
  const list = [
    {
      title: "하이",
      description: "하이하이ㅏ힝",
    },
    {
      title: "바이",
      description: "바이바이바이ㅏ",
    },
  ];
  return (
    <>
      {list.map((v) => (
        <OnePost data={v} />
      ))}
    </>
  );
};
export default Main;

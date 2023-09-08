type OnePostProps = {
  data: { title: string; description: string };
};

const OnePost: React.FC<OnePostProps> = ({ data }): JSX.Element => {
  return (
    <>
      <div>{data.title}</div>
    </>
  );
};
export default OnePost;

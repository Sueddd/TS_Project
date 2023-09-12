import { postList } from "./postdata";
import { rest } from "msw";

// 데이터 받아와줌
export type PostList = {
  title: string;
  description: string;
  img: string;
};

// 데이터 조회
export const getDatas = rest.get<PostList>("/datas", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(postList));
});

// 데이터 추가
export const addDatas = rest.post<PostList>("/datas", async (req, res, ctx) => {
  let title;
  let description;
  // let img;

  await req.json().then((data) => {
    title = data.title;
    description = data.description;
    // img = data.img;
  });

  return res(
    ctx.status(200),
    ctx.json({
      title,
      description,
      // img,
    })
  );
});

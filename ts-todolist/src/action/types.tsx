import { PostList } from "../mocks/api";

export const ADD_POST = "add_post";
export const DELETE_POST = "delete_post";
export interface AppProps {
  name: string;
  control: any;
  errors: any;
  placeholder: string;
}

export interface OnePostProps {
  postdata: { id: number; title: string; description: string };
  onDelete: (value: number) => void;
  editPost: (id: number, title: string, description: string) => void;
}

export interface AddModalProps {
  setIsOpen: (value: boolean) => void;
  dataList: PostList[];
  setDataList: (value: PostList[]) => void;
}

export interface InputProps {
  name: string;
  control: any;
  errors: any;
  placeholder: string;
}

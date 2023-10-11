import { ADD_POST, DELETE_POST } from "./types";

export interface addPropsType {
  id: number;
  title: string;
  description: string;
}

export function addPost(data: addPropsType) {
  return {
    type: ADD_POST,
    payload: data,
  };
}

export function deletePost(data: addPropsType) {
  return {
    type: DELETE_POST,
    payload: data,
  };
}


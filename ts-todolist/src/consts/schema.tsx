import * as yup from "yup";
export const Schema = yup.object().shape({
  title: yup
    .string()
    .required("필수로 입력해 주세요")
    .min(3, "최소 3글자 이상 입력해 주세요")
    .max(10, "10자 이내로 입력해 주세요"),
  description: yup
    .string()
    .required("내용을 필수로 입력해 주세요")
    .min(10, "최소 10자 이상 입력해 주세요")
    .max(100, "100자 이내로 입력해 주세요"),
});

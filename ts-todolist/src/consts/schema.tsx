import * as yup from "yup";
import { REGEX } from "./regex";
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
  email: yup
    .string()
    .matches(REGEX.email, {
      message: "이메일 형식에 맞지 않습니다",
      excludeEmptyString: true,
    })
    .required("이메일을 입력해 주세요"),
  password: yup
    .string()
    .min(8, "8자 이상 입력해 주세요")
    .max(16, "16자 이하로 입력해 주세요.")
    .matches(REGEX.password, {
      message: "영문 숫자, 특수문자를 조합해 입력해 주세요",
    }),
  passwordconfirm: yup
    .string()
    .min(8, "8자 이상 입력해 주세요")
    .max(16, "16자 이하로 입력해 주세요")
    .matches(REGEX.password, {
      message: "비밀번호가 일치하지 않습니다",
    })
    .required("비밀번호를 입력해 주세요")
    .oneOf([yup.ref("pw")], "비밀번호가 일치하지 않습니다."),
  nickName: yup
    .string()
    .min(2, "2자 이상 입력해 주세요")
    .max(12, "12자 미만 입력해 주세요")
    .required("닉네임을 입력해 주세요"),
});

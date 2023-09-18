import { ADD_POST, DELETE_POST } from "../action/types";
import { addPost } from "../action/crud_action";
import { PostList } from "../mocks/api";

// 리듀서 파라미터 중 initialState의 타입 정의
type addStateType = {
  addData: PostList[];
};

// ?
const initialState = {
  addData: [
    {
      id: 1,
      title: "안녕하세요",
      description:
        "내 생일 파티에 너만 못 온 그날 혜진이가 엄청 혼났던 그날 지원이가 여친이랑 헤어진 그날 걔는 언제나 네가 없이 그날 너무 멋있는 옷을 입고 그날",
    },
    {
      id: 2,
      title: "안녕히 가세요",
      description:
        "Iffy, yo, iffy, yeah 이불 밖은 위험해 Let it go, let it pass, 좋은 것만 기억해 빙글빙 빙글뱅 안 돌리고 싶어 해 Listen up, listen up, 나다운 게 필요해 Let me go, let me say 이제 그만 hate or hate Hello, hello, punch you like a 808 나는 나 너는 너 전혀 문제없는걸 다른 것과 틀린 건 달라 동그라미 원하지 미래는 그 누구도 몰라 nobody knows",
    },
  ],
};

// 리듀서 파라미터 중 action의 타입 정의
type AddActionType = ReturnType<typeof addPost>;

// 리듀서 생성
export default function addReducer(
  state: addStateType = initialState, // initial state 타입 넣기
  action: AddActionType, // 액션 타입 넣기
) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        addData: [...state.addData, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        addData: [...state.addData.filter((v) => v.id !== action.payload.id)]
      };
    default:
      return state;
  }
}

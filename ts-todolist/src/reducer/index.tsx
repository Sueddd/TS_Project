import { combineReducers } from "redux";
import addReducer from "./crud_reducer";
import { addPropsType } from "../action/crud_action";

const rootReducer = combineReducers({
  post: addReducer,
});

export default rootReducer;

// rootReducer가 반환하는 타입을 가지겠다.
// useSelector로 스토어에 접근할 때 필요하다.
export type RootState = ReturnType<typeof rootReducer>;

// RootState라는 타입 정의 = useSelector로 리덕스 스토어에 접근할 때 사용된다.

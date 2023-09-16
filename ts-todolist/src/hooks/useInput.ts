import { useState } from "react";

const useInput = (
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLTextAreaElement>) => void] => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
export default useInput;

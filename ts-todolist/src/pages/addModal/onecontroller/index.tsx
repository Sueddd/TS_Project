import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";
import { Auto } from "../../../style/common";

interface AppProps {
  name: string;
  control: any;
  errors: any;
  placeholder: string;
}

const OneController: React.FC<AppProps> = ({
  name,
  control,
  errors,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input {...field} {...rest} placeholder={placeholder} />
        )}
      />
      {errors[name] && (
        <ErrorBox>
          <ErrorMessage name={name} errors={errors} />
        </ErrorBox>
      )}
    </>
  );
};
export default OneController;

const Input = styled.input`
  /* border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 400px; */
  border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 350px;
  padding-bottom: 9px;
  ${Auto}
  margin-top: 20px;
`;
const ErrorBox = styled.div`
  color: #fe6161;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
`;

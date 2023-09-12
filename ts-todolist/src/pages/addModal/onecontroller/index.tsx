import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface AppProps {
  name: string;
  control: any;
  errors: any;
  field: string;
}

const OneController: React.FC<AppProps> = ({
  name,
  control,
  errors,
  field,
  ...rest
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <input {...field} {...rest} />
        )}
      />
      {errors && (
        <div>
          <ErrorMessage name={name} errors={errors} />
        </div>
      )}
    </>
  );
};
export default OneController;

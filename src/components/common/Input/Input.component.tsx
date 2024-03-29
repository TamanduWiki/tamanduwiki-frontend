import { Field, FieldProps } from "formik";
import { InputHTMLAttributes } from "react";
import {
  ErrorMsg,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./Input.styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label?: string;
  fluid?: boolean;
  formikField?: boolean;
}

const Input = ({
  name,
  label,
  placeholder,
  fluid,
  formikField,
  ...rest
}: Props) => {
  if (!formikField)
    return (
      <InputContainer fluid={fluid}>
        {label && <StyledLabel htmlFor="name">{label}</StyledLabel>}

        <StyledInput name={name} placeholder={placeholder} {...rest} />
      </InputContainer>
    );

  return (
    <Field name={name}>
      {({ meta, field }: FieldProps) => (
        <InputContainer fluid={fluid}>
          {label && <StyledLabel htmlFor="name">{label}</StyledLabel>}

          <StyledInput
            name={name}
            placeholder={placeholder}
            errored={meta.touched && !!meta.error}
            {...rest}
            {...field}
          />

          {meta.touched && !!meta.error && <ErrorMsg>{meta.error}</ErrorMsg>}
        </InputContainer>
      )}
    </Field>
  );
};

export default Input;

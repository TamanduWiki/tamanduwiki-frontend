import { Field, FieldProps } from "formik";
import { TextareaHTMLAttributes } from "react";
import {
  ErrorMsg,
  InputContainer,
  StyledTextarea,
  StyledLabel,
} from "./TextareaInput.styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

        <StyledTextarea name={name} placeholder={placeholder} {...rest} />
      </InputContainer>
    );

  return (
    <Field name={name}>
      {({ meta, field }: FieldProps) => (
        <InputContainer fluid={fluid}>
          {label && <StyledLabel htmlFor="name">{label}</StyledLabel>}

          <StyledTextarea
            rows={15}
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

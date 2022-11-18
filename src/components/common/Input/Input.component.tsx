import { InputHTMLAttributes } from "react";
import { InputContainer, StyledField, StyledInput, StyledLabel } from "./Input.styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label?: string;
  fluid?: boolean;
  formikField?: boolean;
}

const Input = ({ name, label, placeholder, fluid, formikField, ...rest }: Props) => {
  if (!formikField) return (
    <InputContainer fluid={fluid}>
      {label && <StyledLabel htmlFor="name">{label}</StyledLabel>}

      <StyledInput name={name} placeholder={placeholder} {...rest} />
    </InputContainer>
  );

  return (
    <InputContainer fluid={fluid}>
      {label && <StyledLabel htmlFor="name">{label}</StyledLabel>}

      <StyledField name={name} placeholder={placeholder} {...rest} />
    </InputContainer>
  )
};

export default Input;

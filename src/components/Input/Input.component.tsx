import { InputHTMLAttributes } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./Input.styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  fluid?: boolean;
}

const Input = ({ name, label, placeholder, fluid, ...rest }: Props) => {
  return (
    <InputContainer fluid={fluid}>
      <StyledLabel htmlFor="name">{label}</StyledLabel>

      <StyledInput name={name} placeholder={placeholder} {...rest} />
    </InputContainer>
  );
};

export default Input;

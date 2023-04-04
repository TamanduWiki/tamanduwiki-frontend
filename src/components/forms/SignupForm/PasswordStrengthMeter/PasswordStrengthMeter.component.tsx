import { FiCheck, FiXCircle } from "react-icons/fi";

import Flex from "@/components/common/Flex";

import {
  containsAtLeastEightChars,
  containsLowercaseChar,
  containsNumber,
  containsSpecialChar,
  containsUppercaseChar,
} from "@/utils/password";

import { PasswordRuleContainer } from "./PasswordStrength.styles";

interface PasswordRuleProps {
  obeyed: boolean;
  label: string;
}

const PasswordRule = ({ obeyed, label }: PasswordRuleProps) => (
  <PasswordRuleContainer obeyed={obeyed}>
    {obeyed ? (
      <FiCheck style={{ flexShrink: 0 }} />
    ) : (
      <FiXCircle style={{ flexShrink: 0 }} />
    )}

    <p>{label}</p>
  </PasswordRuleContainer>
);

interface Props {
  password: string;
}

const PasswordStrengthMeter = ({ password }: Props) => {
  return (
    <Flex direction="column" gap="sm">
      <PasswordRule
        obeyed={containsLowercaseChar(password)}
        label="Contém pelo menos 1 letra minúscula"
      />

      <PasswordRule
        obeyed={containsUppercaseChar(password)}
        label="Contém pelo menos 1 letra maiúscula"
      />

      <PasswordRule
        obeyed={containsNumber(password)}
        label="Contém pelo menos 1 número"
      />

      <PasswordRule
        obeyed={containsSpecialChar(password)}
        label="Contém pelo menos 1 caractere especial"
      />

      <PasswordRule
        obeyed={containsAtLeastEightChars(password)}
        label="Contém pelo menos 8 caracteres no total"
      />
    </Flex>
  );
};

export default PasswordStrengthMeter;

import { theme } from "@/styles/theme";
import {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
} from "react-select";
import AsyncSelect from "react-select/async";
import { Container } from "./TagPicker.styles";

interface Props {
  label: string;
  name: string;
  loadOptions: (
    inputValue: string,
    callback: (options: OptionsOrGroups<any, GroupBase<any>>) => void
  ) => void | Promise<OptionsOrGroups<any, GroupBase<any>>>;
  onChange: (newValue: MultiValue<any>, actionMeta: ActionMeta<any>) => void;
  defaultValue: any;
}

const TagPicker = ({
  loadOptions,
  onChange,
  defaultValue,
  label,
  name,
}: Props) => {
  return (
    <Container>
      {label}

      <AsyncSelect
        name={name}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        defaultValue={defaultValue}
        styles={{
          menu: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: theme.colors.neutral_600,
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 0,
            border: "none",
            backgroundColor: theme.colors.neutral_600,
            boxShadow: "none",
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: theme.colors.neutral_300,
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: theme.colors.neutral_600,
            ":active": {
              backgroundColor: theme.colors.neutral_400,
            },
            ":hover": {
              backgroundColor: theme.colors.neutral_400,
            },
          }),
          multiValue: (baseStyles, state) => ({
            ...baseStyles,
            color: theme.colors.green_200,
            borderRadius: 0,
            border: `1px solid ${theme.colors.green_200}`,
            background: "transparent",
          }),
          multiValueLabel: (baseStyles, state) => ({
            ...baseStyles,
            color: theme.colors.green_200,
          }),
          multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 0,
            ":hover": {
              bacakgroundColor: theme.colors.neutral_400,
              color: theme.colors.error,
              cursor: "pointer",
            },
          }),
        }}
      />
    </Container>
  );
};

export default TagPicker;

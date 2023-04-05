import { Field, FieldProps } from "formik";
import { TextareaHTMLAttributes, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownContainer from "../MarkdownContainer";
import {
  ErrorMsg,
  InputContainer,
  PreviewSection,
  PreviewSectionContainer,
  StyledTextarea,
  Tab,
  Tabs,
} from "./MarkdownTextarea.styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
}

const MarkdownTextarea = ({ name, placeholder, ...rest }: Props) => {
  const [currentTab, setCurrentTab] = useState<"write" | "preview">("write");

  return (
    <Field name={name}>
      {({ meta, field }: FieldProps) => (
        <InputContainer fluid={false}>
          <Tabs>
            <Tab
              selected={currentTab === "write"}
              onClick={() => setCurrentTab("write")}
            >
              Conteúdo
            </Tab>

            <Tab
              selected={currentTab === "preview"}
              onClick={() => setCurrentTab("preview")}
            >
              Preview
            </Tab>
          </Tabs>

          {currentTab === "write" && (
            <StyledTextarea
              rows={15}
              name={name}
              placeholder={placeholder}
              errored={meta.touched && !!meta.error}
              {...rest}
              {...field}
            />
          )}

          {currentTab === "preview" && (
            <PreviewSectionContainer>
              <PreviewSection>
                <MarkdownContainer>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {field?.value}
                  </ReactMarkdown>
                </MarkdownContainer>
              </PreviewSection>
            </PreviewSectionContainer>
          )}

          {meta.touched && !!meta.error && <ErrorMsg>{meta.error}</ErrorMsg>}
        </InputContainer>
      )}
    </Field>
  );
};

export default MarkdownTextarea;

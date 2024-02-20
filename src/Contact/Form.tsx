import {
  FormWrapper,
  InputLabel,
  FormLine,
  InputWrapper,
  FormInput,
  FormTextArea,
  RequiredLabel,
} from "./Contact.styles";
import pageContent from "../assets/pageContent.json";
import { SubmitButton } from "../Subscribe/Subscribe.styles";
import { ChangeEvent, useState } from "react";

export const ContactForm = () => {
  const [firstNameState, setFirstNameState] = useState<string>("");
  const [lastNameState, setLastNameState] = useState<string>("");
  const [emailState, setEmailState] = useState<string>("");
  const [subjectState, setSubjectState] = useState<string>("");
  const [messageState, setMessageState] = useState<string>("");

  const { firstName, lastName, email, subject, message, required } =
    pageContent.contact.form;

  const Required = () => {
    return <RequiredLabel>{required}</RequiredLabel>;
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNameState(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastNameState(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailState(event.target.value);
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubjectState(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageState(event.target.value);
  };

  return (
    <FormWrapper>
      <FormLine>
        <InputWrapper>
          <InputLabel>{firstName}</InputLabel>
          <FormInput
            type="text"
            value={firstNameState}
            onChange={handleFirstNameChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="lastName">{lastName}</InputLabel>
          <FormInput
            value={lastNameState}
            type="text"
            name="lastName"
            onChange={handleLastNameChange}
          />
        </InputWrapper>
      </FormLine>
      <FormLine>
        <InputWrapper>
          <InputLabel>
            {email} <Required />
          </InputLabel>
          <FormInput
            required
            type="text"
            value={emailState}
            onChange={handleEmailChange}
          />
        </InputWrapper>
      </FormLine>
      <FormLine>
        <InputWrapper>
          <InputLabel>{subject}</InputLabel>
          <FormInput
            type="text"
            value={subjectState}
            onChange={handleSubjectChange}
          />
        </InputWrapper>
      </FormLine>
      <FormLine>
        <InputWrapper>
          <InputLabel>
            {message} <Required />
          </InputLabel>
          <FormTextArea
            required
            value={messageState}
            onChange={handleMessageChange}
          />
        </InputWrapper>
      </FormLine>
      <FormLine>
        <SubmitButton $enablePadding>Submit</SubmitButton>
      </FormLine>
    </FormWrapper>
  );
};

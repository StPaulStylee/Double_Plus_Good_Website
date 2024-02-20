import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0 auto;
  width: 80%;
`;

export const FormLine = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

export const FormInput = styled.input`
  background-color: #fcfcfc;
  border: solid 1px rgb(169, 169, 169);
  box-sizing: border-box;
  padding: 1.4rem 2rem;
  width: 100%;
`;

export const FormTextArea = styled.textarea`
  background-color: #fcfcfc;
  border: solid 1px rgb(169, 169, 169);
  box-sizing: border-box;
  padding: 1rem;
  resize: vertical;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
`;

export const RequiredLabel = styled.span`
  color: #666464;
  font-size: 14px;
`;

export const InputWrapper = styled.div`
  flex-grow: 1;
`;

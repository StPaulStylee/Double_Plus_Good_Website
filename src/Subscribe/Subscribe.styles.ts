import styled, { css } from "styled-components";

export const SubscribeInputContainer = styled.form`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin: 1rem 0;
`;

export const SubscribeInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.12);
  flex-basis: 60%;
  font-size: 16px;
  padding: 1.4rem 2rem;
  line-height: 1.2rem;
`;

export const SubmitButton = styled.button<{ $enablePadding?: boolean }>`
  background-color: black;
  border: solid black;
  border-radius: 0;
  color: white;
  cursor: pointer;
  font-size: 14.5px;
  font-weight: 700;
  width: 120px;
  ${(props) =>
    props.$enablePadding &&
    css`
      padding: 1.4rem 2rem;
    `}
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubscribeSuccess = styled.span`
  color: #495057;
  font-weight: bold;
`;

export const SubscribeFailure = styled.span`
  color: #a50203;
  font-weight: bold;
`;

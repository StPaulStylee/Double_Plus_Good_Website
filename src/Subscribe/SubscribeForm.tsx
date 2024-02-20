import React, { FormEvent, useEffect, useState } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";
import pageContent from "../assets/pageContent.json";
import {
  StatusContainer,
  SubmitButton,
  SubscribeFailure,
  SubscribeInput,
  SubscribeInputContainer,
  SubscribeSuccess,
} from "./Subscribe.styles";

interface ISubscribeFrom {
  status: "error" | "success" | "sending" | null;
  message: any;
  onValidated: (data: EmailFormFields) => void;
}

export const SubscribeForm = ({
  status,
  message,
  onValidated,
}: ISubscribeFrom) => {
  const { subscribeInputPlaceHolder, subscribeButtonText } = pageContent.about;
  const [email, setEmail] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email && email.indexOf("@") === -1) {
      setIsInvalidEmail(true);
    }
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") {
      setEmail("");
      setIsInvalidEmail(false);
    }
  }, [email, isInvalidEmail, status]);

  return (
    <>
      <SubscribeInputContainer>
        <SubscribeInput
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
          required
          placeholder={subscribeInputPlaceHolder}
        />
        <SubmitButton type="button" onClick={handleSubmit}>
          {status === "sending" && "Sending..."}
          {status !== "sending" && subscribeButtonText}
        </SubmitButton>
      </SubscribeInputContainer>
      <StatusContainer>
        {status === "error" && (
          <SubscribeFailure>
            Something bad happened and we couldn't subscribe you... Try again
            later.
          </SubscribeFailure>
        )}
        {isInvalidEmail && (
          <SubscribeFailure>
            Please enter a vaild email address...
          </SubscribeFailure>
        )}
        {status === "success" && (
          <SubscribeSuccess>{message ?? "Success!"}</SubscribeSuccess>
        )}
      </StatusContainer>
    </>
  );
};

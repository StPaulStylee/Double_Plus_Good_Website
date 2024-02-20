import MailchimpSubscribe from "react-mailchimp-subscribe";
import pageContent from "../assets/pageContent.json";
import { SubscribeForm } from "./SubscribeForm";
export const Subscribe = () => {
  const uValue = "59aabe07cf1f261c232ff68dc";
  const idValue = "6600669443";
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${uValue}&id=${idValue}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <SubscribeForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

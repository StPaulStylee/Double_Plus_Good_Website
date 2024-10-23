import MailchimpSubscribe from "react-mailchimp-subscribe";
import { SubscribeForm } from "./SubscribeForm";
export const Subscribe = () => {
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=59aabe07cf1f261c232ff68dc&id=6600669443&f_id=00b586e6f0`;

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

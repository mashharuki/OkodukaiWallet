import * as PushAPI from '@pushprotocol/restapi';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { useState } from 'react';

type Props = {
  spams: PushAPI.ParsedResponseType[];
};

/**
 * Notifications component
 */
const Notifications = (props:Props) => {

  const { spams } = props;
  const [theme, setTheme] = useState('light');

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-4xl">
      {spams ? (
        <div className="my-5 px-5 w-full">
          {spams.map((oneNotification, i) => {
          const { 
            cta,
            title,
            message,
            app,
            icon,
            image,
            url,
            blockchain,
            secret,
            notification
          } = oneNotification;

          return (
            <NotificationItem
              key={`spam-${i}`}
              notificationTitle={secret ? notification['title'] : title}
              notificationBody={secret ? notification['body'] : message}
              cta={cta}
              app={app}
              icon={icon}
              image={image}
              url={url}
              // optional parameters for rendering spambox
              isSpam
              subscribeFn={async () => console.log("yayy spam")}
              isSubscribedFn={async () => false}
              theme={theme}
              chainName={blockchain as chainNameType}
            />
          );
        })}
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
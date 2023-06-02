import * as PushAPI from '@pushprotocol/restapi';
import { getSigner } from '../utils/ethereum';
import { getCAIPAddress } from './../utils/helper';

/**
 * send Notification method
 * @param address recipient address
 */
export const sendNotifications = async(address: string) => {
  const env: any = 'staging';
  // get signer
  const signer = getSigner();
  // send notifications
  const apiResponse = await PushAPI.payloads.sendNotification({
    signer: signer,
    type: 3, // target
    identityType: 2, // direct payload
    notification: {
      title: `【Sample】Received Notification`,
      body: `You were received crypo currency!!`
    },
    payload: {
      title: `【Sample】Received Notification`,
      body: `You were received crypo currency!! Please check it!!`,
      cta: '',
      img: ''
    },
    recipients: `eip155:5:${address}`, // recipient address
    channel: 'eip155:5:0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072', // channel address
    env: env
  });

  console.log("send notification result:", apiResponse);
};

/**
 * get Notification (Spam) method
 */
export const loadNotifications = async(isCAIP: boolean, account: string): Promise<PushAPI.ParsedResponseType[]> => {
  
  const env: any = 'staging';
  // get spams
  const spams: PushAPI.ParsedResponseType[] = await PushAPI.user.getFeeds({
    user: isCAIP ? getCAIPAddress(env, account) : account,
    spam: true,
    env: env
  });

  return spams;
};
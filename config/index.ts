import { env } from 'process';

export default {
  twilio: {
    sendgridApiKey: env.SENDGRID_API_KEY as string,
    fromName: env.FROM_NAME,
    fromEmail: env.FROM_EMAIL as string,
  },
};

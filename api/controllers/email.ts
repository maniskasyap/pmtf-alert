import { Request, Response } from 'express';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { get, post } from '../../services/api-call';
import { createSuccess, createFailure } from '../../utils/api-response';
import config from '../../config';

sgMail.setApiKey(config.twilio.sendgridApiKey);

const sendEmail = async (req: Request, res: Response, next: any) => {
  try {
    const { emailTo, emailSub, emailBody } = req.body;

    const defaultSub = 'Hello from pmtf!';

    const msg: MailDataRequired = {
      to: emailTo,
      from: { name: config.twilio.fromName, email: config.twilio.fromEmail },
      subject: emailSub || defaultSub,
      text: 'Test email text from pmtf',
      html: '<strong>Test email text from pmtf</strong>',
    };

    const emailRes = await sgMail.send(msg);
    const resPayload = createSuccess(emailRes);
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(undefined, error);
    res.status(500).send(resPayload);
  }
};

export { sendEmail };

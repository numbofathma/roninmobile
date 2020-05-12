import * as emailjs from 'emailjs-com';
import { ContactForm } from '@interfaces/interfaces';

class EmailService {
  public static sendEmail = (data: ContactForm): Promise<boolean> => emailjs.send('roninmobile', 'template_XxCJnsh12', {
    name: data.name,
    email: data.email,
    message: data.message,
  }, 'user_YyZP08WWVTxIiq0gnfkAm').then(
    () => true,
    () => false,
  );
}

export default EmailService;

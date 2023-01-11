import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import * as path from 'path';

// Send email without the class:
const sendEmail = async (options) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, `/utils/resetEmail.html`);
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = Handlebars.compile(source);
    const replacements = {
      username: options.name,
      link: `http://localhost:3000/resetPassword/${options.token}`,
    };
    const htmlToSend = template(replacements);
    // 1. Create a transporter
    // TRANSPORTER FOR MAILTRAP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // 2. Define the email options
    const mailOptions = {
      from: `Peter <${process.envEMAIL_ADMIN}>`,
      to: options.email,
      subject: options.subject,
      html: htmlToSend,
    };
    // 3. Send the email with nodemailer
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail;

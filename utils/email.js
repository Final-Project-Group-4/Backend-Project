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
      link: `${process.env.PROD_URL}/resetPassword/${options.token}`,
    };
    const htmlToSend = template(replacements);
    // 1. Create a transporter

    // TRANSPORTER FOR MAILTRAP
    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // TRANSPORTER FOR SENDGRID(REAL EMAILS)
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: `<${process.env.SENDGRID_EMAIL_FROM}>`,
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

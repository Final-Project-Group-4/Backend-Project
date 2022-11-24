import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  //1) create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    //Activate in gmail "less secure app" option.  Only 500 email and report as spam.
  });

  //2) Define the email options

  const mailOptions = {
    from: "Rekha hello@rekha.io",
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html
  };
  //3) Actually send the email with the nodemailer
  await transporter.sendMail(mailOptions);
};
export default sendEmail;

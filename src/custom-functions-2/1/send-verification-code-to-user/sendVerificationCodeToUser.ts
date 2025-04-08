import { nodemailerTransporter } from "../send-email-using-nodemailer/sendEmailByNodeMailer.js";
import verificationCodeBody from "../verification-code-body/verificationCodeBody.js";

const sendVerificationCodeToUser = (verificationCode: any, email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mailOptions = {
        from: "port.denison.customer.care@gmail.com",
        to: email,
        subject: "Verify your Expense Tracker Account",
        html: verificationCodeBody(verificationCode),
      };
      nodemailerTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error:", error);
          reject(error);
        } else {
          console.log("Email sent:", info.response);
          resolve("");
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
export { sendVerificationCodeToUser };

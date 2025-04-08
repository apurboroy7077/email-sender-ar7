import nodemailer from "nodemailer";

// Create a transporter
const nodemailerTransporter = nodemailer.createTransport({
  service: "gmail", // or any other service
  auth: {
    user: "port.denison.customer.care@gmail.com",
    pass: "synmvobacduqdgvj",
  },
});

// Sending an email
// const mailOptions = {
//   from: "port.denison.customer.care@gmail.com",
//   to: "apurboroy7077@gmail.com",
//   subject: "Test Email",
//   text: "This is a test email sent using nodemailer!",
// };

// nodemailerTransporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Email sent:", info.response);
//   }
// });

export { nodemailerTransporter };

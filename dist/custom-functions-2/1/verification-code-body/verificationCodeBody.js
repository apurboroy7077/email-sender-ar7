const verificationCodeBody = (verificationCode) => {
    return `<!DOCTYPE html>
 <html>
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <style>
     body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       margin: 0;
       padding: 0;
     }
     .container {
       max-width: 600px;
       margin: 0 auto;
       background-color: #ffffff;
       padding: 20px;
       border-radius: 8px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     }
     .header {
       text-align: center;
       padding: 10px 0;
     }
     .header h1 {
       color: #333;
     }
     .content {
       margin: 20px 0;
       text-align: center;
     }
     .content p {
       font-size: 16px;
       color: #555;
     }
     .verification-code {
       font-size: 24px;
       font-weight: bold;
       color: #4CAF50;
       margin: 10px 0;
     }
     .footer {
       text-align: center;
       padding: 10px 0;
       font-size: 12px;
       color: #888;
     }
   </style>
 </head>
 <body>
   <div class="container">
     <div class="header">
       <h1>Email Verification</h1>
     </div>
     <div class="content">
       <p>Thank you for signing up! Please use the following verification code to complete your registration:</p>
       <div class="verification-code">${verificationCode}</div>
       <p>If you did not request this email, you can safely ignore it.</p>
     </div>
     <div class="footer">
       <p>Best regards, <br>The Expense Tracker Company</p>
     </div>
   </div>
 </body>
 </html>
 `;
};
export default verificationCodeBody;
//# sourceMappingURL=verificationCodeBody.js.map
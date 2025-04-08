import nodemailer from "nodemailer";
export const sendEmailFromAnotherServerController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { smtp_host, smtp_service, smtp_port, smtp_email, smtp_password, smtp_secure_status, receiver_email, email_subject, email_body, } = receivedData;
        const nodemailerTransporter = nodemailer.createTransport({
            host: smtp_host,
            port: smtp_port,
            secure: smtp_secure_status,
            service: smtp_service, // false for 587, true for 465
            auth: {
                user: smtp_email, // Replace with your email
                pass: smtp_password, // Replace with your password
            },
        });
        await nodemailerTransporter.sendMail({
            from: smtp_email,
            to: receiver_email,
            subject: email_subject,
            html: email_body,
        });
        response.status(200).json({ _: "" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=sendEmail.controller.js.map
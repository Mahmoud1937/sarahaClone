import nodemailer from "nodemailer"
const sendEmails = async ({ to, subject, html }) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.EMAIL_Pass
        },
    });
    const info = await transporter.sendMail({
        from: ` saraha Application <${process.env.USER_EMAIL}>`,
        to,
        subject,
        html

    })

    return info.rejected.length == 0 ? true : false
}
export const subjects = {
    register: "Activate Account",
    forgetPassword: "Reset Password"
};

export default sendEmails;

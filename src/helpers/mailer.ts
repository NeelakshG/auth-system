// domain.come/verifytoken/asasdw --> easier on server side to retrieve
// domain.com/verifytoken?token=adasd --> easier on client side

import nodemailer from 'nodemailer'
import User from "@/models/userModel"
import bcryptjs from 'bcryptjs'

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        //create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                }
            )
        } else if (emailType === "RESET") {
           await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    ForgotPasswordTokenExpiry: Date.now() + 3600000
                }
            ) 
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}</p>`,
        });

        console.log("Message sent:", info.messageId);
        return info;

    } catch (error:any) {
        throw new Error(error.message)
    }
}
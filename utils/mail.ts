import nodeMailer from "nodemailer";

export const transporter = nodeMailer.createTransport({
	host: "gmail",
	port: 587,
	auth: {
		user: process.env.MAILER_USER,
		pass: process.env.MAILER_PASSWORD,
	},
});

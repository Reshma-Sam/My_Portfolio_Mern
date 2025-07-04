const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const sgTransport = require('nodemailer-sendgrid-transport');

// Transport
//----------
const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,
        },
    })
)

const sendEmailController = async (req, res) => {
    try {
        const { name, email, msg } = req.body;

        if (!name || !email || !msg) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }

        await transporter.sendMail({
            to: "reshmasamzain@gmail.com",
            from: "reshmazainsam@gmail.com",
            subject: "Regarding My Portfolio App",
            html: `
                <h5>Details Information</h5>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Message: ${msg}</li>
                </ul>
            `
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error("Email Send Error →", error);
        return res.status(500).json({
            success: false,
            message: "Send Email API Error",
            error: error.message
        });
    }
};


module.exports = { sendEmailController };
const sgMail = require('@sendgrid/mail');

// Set SendGrid API key from environment variable
sgMail.setApiKey(process.env.API_SENDGRID);

const sendEmailController = async (req, res) => {
    try {
        const { name, email, msg } = req.body;

        if (!name || !email || !msg) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }

        const message = {
            to: "reshmasamzain@gmail.com",       // Receiver email
            from: "reshmazainsam@gmail.com",     // Sender (must be verified in SendGrid)
            subject: "Regarding My Portfolio App",
            html: `
                <h5>Details Information</h5>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Message:</strong> ${msg}</li>
                </ul>
            `,
        };

        await sgMail.send(message);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error("SendGrid Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send email",
            error: error.message
        });
    }
};

module.exports = { sendEmailController };

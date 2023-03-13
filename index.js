const express = require("express")
const cors = require('cors')
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email_address@gmail.com',
        pass: 'your_email_password'
    }
});

app.get('/', (req, res) => {
    res.send("server running")
})

app.post("/send-email", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohisilva1@gmail.com',
            pass: 'peqprjkgjiikugvk'
        }
    });

    const mailOptions = {
        from: 'mohisilva1@gmail.com',
        to: 'mohiuddinsilva14@gmail.com',
        subject: 'Testing Nodemailer',
        text: 'Hello, Mohi!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });

})

app.listen(port, () => {
    console.log(`SERVER RUNNING ON ${port}`)
})
const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('Server is listening on port 5000'));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "user@gmail.com",
        pass: ""
    }
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req,res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const mail = {
        from: `${firstName} ${lastName}`,
        to: '',
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>
        `,
    };
    contactEmail.sendEmail(mail, (error) => {
        if(error) {
            res.json(error);
        }else{
            res.json({ code: 200, status: "Message sent"});
        }
    });
});
const express = require('express');
let app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

app.use(cors());

//set up an SMTP server to send mail from 
//enter the email for the SMTP server in the user field
//enter the email's password in the pass field
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "",
      pass: ""
    }
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  //the from field should have the same email that is used as the SMTP email
  //the to field contains the email address you are sending the message to
  app.post("/api/send", (req, res, next) => {
    var name = req.query.name
    var subject = `${req.query.subject} - ${name}`
    var message = req.query.message
    var mail = {
      from: '',
      to: '',
      subject: subject,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

  const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}`),
    );

  
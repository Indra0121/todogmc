const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'yana11112.u@gmail.com',
    pass: 'favbd-Jan11',
  },
});

function sendEmail() {
  const mailOptions = {
    from: 'yana11112.u@gmail.com',
    to: 'sasudest@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Node.js and nodemailer.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!');
    }
  });
}

sendEmail();

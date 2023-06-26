const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'ur email',
    pass: 'password',
  },
});

function sendEmail() {
  const mailOptions = {
    from: 'ur email',
    to: 'email to send to ',
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

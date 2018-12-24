var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xyz@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'xyz@gmail.com',
  to: 'abc@gmail.com',
  cc: 'def@gmail.com',
  subject: 'HBD ABC 🎂 🎁 🍰 🎈🎈🎈 - Email using Node.js (LOL)',
  text: 'Many Many Happy returns of the Day ABC!',
  html: '<a href="http://www.animatedimages.org/cat-happy-birthday-1243.htm"><img src="http://www.animatedimages.org/data/media/1243/animated-happy-birthday-image-0025.gif" border="0" alt="animated-happy-birthday-image-0025" /></a>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
require('dotenv').config();
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

(async function run() {
  console.log('Running report...');

  const date = process.env.currdate
  const day = process.env.currday
  const data = process.env.points

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.DAILY_REPORT_FROM,
    to: process.env.DAILY_REPORT_TO,
    cc: process.env.DAILY_REPORT_TO_CC,
    subject: 'Status' + date,
    text: `
${data}

Thanks & Regards
Suryansh Mathur
    `,
  });

})();
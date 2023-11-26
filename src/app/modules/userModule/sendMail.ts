import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "mail.uttamsaha.com",
    port: 465,
    secure: true,
    auth: {
      user: "mail@uttamsaha.com",
      pass: "@komolxx99#",
    },
  });
  
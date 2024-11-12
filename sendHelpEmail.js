// //NON REPETITIVE ENAIL FUCTIONALITY
// const { SerialPort } = require("serialport");
// const { ReadlineParser } = require("@serialport/parser-readline");
// const nodemailer = require("nodemailer");

// const port = new SerialPort({ path: "COM11", baudRate: 9600 });
// const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

// let emailSent = false; // Flag to track if an email has been sent
// const debounceTimeout = 5000; // 5 seconds timeout before allowing a new email

// // Set up Nodemailer transporter
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "adityagautam1911@gmail.com",
//     pass: "yozf krye dxte pybs",
//   },
// });

// // Function to send an email
// function sendHelpEmail() {
//   const mailOptions = {
//     from: "adityagautam1911@gmail.com",
//     to: "adityagautam1911@gmail.com",
//     subject: "Help Alert!",
//     text: "Help button has been pressed on the Arduino!",
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//     } else {
//       console.log("Email sent:", info.response);
//     }
//   });
// }

// // Listen for data from Arduino
// parser.on("data", (data) => {
//   console.log("Received data from Arduino:", data);

//   if (data.trim() === "Help (this is test message)" && !emailSent) {
//     console.log("Button pressed, sending help email...");
//     sendHelpEmail();
//     emailSent = true; // Set flag to prevent multiple emails

//     // Reset the flag after debounceTimeout
//     setTimeout(() => {
//       emailSent = false;
//       console.log("Ready to send a new email on next press.");
//     }, debounceTimeout);
//   }
// });

//EMAIL + WEBSITE ALERT
const express = require("express");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const nodemailer = require("nodemailer");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = new SerialPort({ path: "COM11", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

let emailSent = false;
const debounceTimeout = 5000;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adityagautam1911@gmail.com",
    pass: "", //put your app password here
  },
});

function sendHelpEmail() {
  const mailOptions = {
    from: "adityagautam1911@gmail.com",
    to: "adityagautam1911@gmail.com",
    subject: "Help Alert!",
    text: "Help button has been pressed on the Arduino!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

parser.on("data", (data) => {
  console.log("Received data from Arduino:", data);

  if (data.trim() === "Help" && !emailSent) {
    console.log("Button pressed, sending help email and triggering alert...");

    sendHelpEmail();
    io.emit("alert", "Help button has been pressed!"); // Emit alert to client

    emailSent = true; // Set flag to prevent multiple emails

    setTimeout(() => {
      emailSent = false; // Reset flag after debounceTimeout
      console.log("Ready to send a new email on next press.");
    }, debounceTimeout);
  }
});

// Serve the alert webpage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

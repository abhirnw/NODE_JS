const CronJob = require("cron").CronJob;
const { start } = require("repl");
const config = require("../config/config");
const { emailService, userService } = require("../services");
const { User } = require("../models");

/** It's running on every 3 seconds. */
// new CronJob(
//   "*/3 * * * * *",
//   function () {
//     console.log("It's running on every 3 seconds.");
//   },
//   null,
//   false,
//   "Asia/Kolkata"
// ).start();

/** It's running on when clock time is 7:45 of 24 hours */
new CronJob(
  "45 7 * * *",
  function () {
    console.log("It's running on when clock time is 7:45");
  },
  null,
  false,
  //   "America/Sao_Paulo"
  "Asia/Kolkata"
).start();

/** Send email */
new CronJob(
  "15 14 * * *",
  function () {
    emailService.sendMail(
      "Abhirnw@gmail.com",
      "Morning message",
      "Good morning Abhi! Have a nice day :)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** Multiple send email */
new CronJob(
  "19 14 * * *",
  async () => {
    const userDetails = await userService.getUserList();

    const userEmails = [];
    for (let ele of userDetails) {
      userEmails.push(ele.email);
    }

    await emailService.sendMail(
      userEmails,
      "Morning message",
      "Good morning Abhi! Have a nice day :)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();

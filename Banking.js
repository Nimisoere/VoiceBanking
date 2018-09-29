const express = require("express");
const alexa = require("alexa-app");
var PORT = process.env.port || 8080;
const app = express();

var VoiceBankingApp = new alexa.app("voiceBanking");

VoiceBankingApp.express({
  expressApp: app,
  checkCert: false,
  debug: true
});

VoiceBankingApp.launch(function(req, res) {
  res.say("Welcome to your Bank! What are we doing today?");
  res.card("Welcome to your Bank! What are we doing today?");
});

VoiceBankingApp.intent(
  "TopUpIntent",
  {
    slots: [
      {
        name: "amount",
        type: "AMAZON.NUMBER"
      },
      {
        name: "number",
        type: "AMAZON.NUMBER"
      }
    ],
    utterances: [
      "Buy {amount} recharge card for {number}",
      "Buy {amount} recharge card",
      "Top up {number} with {amount}",
      "Top up my phone with {amount}",
      "Buy {amount} airtime",
      "Buy airtime",
      "Top up my phone",
      "Recharge my phone"
    ]
  },
  function(req, res) {
    request.hasSession() &&
    res.say('I will recharge your phone')
  }
);

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/test");

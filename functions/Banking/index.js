"use strict";

//const Alexa = require("ask-sdk-core");
const VoiceBanking = require("./Banking");
const LaunchRequestHandler = require("./handlers/LaunchRequestHandler");
const SessionEndedRequestHandler = require("./handlers/SessionEndedRequestHandler");
const TopUpIntentHandler = require("./handlers/TopUpIntentHandler");
const ErrorHandler = require("./handlers/ErrorHandler");
const TransferIntentHandler = require("./handlers/TransferIntentHandler");
const BillsPaymentIntentHandler = require("./handlers/BillsPaymentIntentHandler");

exports.handle = VoiceBanking.lambda();

// use 'ask-sdk' if standard SDK module is installed
////////////////////////////////
// Code for the handlers here //
////////////////////////////////
/* exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    SessionEndedRequestHandler,
    TopUpIntentHandler,
    TransferIntentHandler,
    BillsPaymentIntentHandler,
    ErrorHandler
  )
  .lambda(); */

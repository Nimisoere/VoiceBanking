const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    const speechText =
      "Hi! Let's start banking, do you want to Pay Bills or Make a transfer or top up your phone?";
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard("BankingSession", speechText)
      .getResponse();
  }
};
 module.exports = LaunchRequestHandler
const TransferIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "TopUpIntent"
    );
  },
  handle(handlerInput) {
    const speechText = "Let's make a transfer";
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard("BankingSession", speechText)
      .getResponse();
  }
};

module.exports = TransferIntentHandler;

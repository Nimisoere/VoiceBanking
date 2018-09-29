const BillsPaymentIntentHandler = {
    canHandle(handlerInput) {
      return (
        handlerInput.requestEnvelope.request.type === "IntentRequest" &&
        handlerInput.requestEnvelope.request.intent.name === "PaymentIntent"
      );
    },
    handle(handlerInput) {
      const speechText = "Hi! Let's pay some bills";
      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard("BankingSession", speechText)
        .getResponse();
    }
  };
  
  module.exports = BillsPaymentIntentHandler;
  
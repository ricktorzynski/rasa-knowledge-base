/**
 * @file 
 * Rasa Chatbot
 *
 */

 (function ($, Drupal, window, document) {
  
  

  Drupal.behaviors.tfTraining = {
    attach: function (context, settings) {
      
      $('#connect').once().click(function () {
        var chatroom = new window.Chatroom({
          host: "https://drupalml.com/rasa",
          title: "Drupal DropBot",
          container: document.querySelector(".chat-container"),
          welcomeMessage: "Hi, I am DropBot",
          speechRecognition: "en-US",
          voiceLang: "en-US"
        });
        document.getElementById("connect").style.visibility="hidden";
        chatroom.openChat();
      });

    }
  };
}(jQuery, Drupal, this, this.document));


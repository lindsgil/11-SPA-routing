'use strict';

(function(module) {
  const aboutController = {};

    // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    console.log('Helloooo we are inside of aboutController');
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);

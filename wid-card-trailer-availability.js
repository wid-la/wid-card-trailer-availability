'use strict';

(function () {
  Polymer({

    is: 'wid-card-trailer-availability',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * codeName
       * @type {String}
       */
      codeName: {
        type: String
      },

      /**
       * Status
       * @type {String}
       */
      label: {
        type: String
      },

      /**
       * User
       * @type {String}
       */
      reefer: {
        type: String
      },

      /**
       * dry
       * @type {String}
       */
      dry: {
        type: String
      }
    },

    _getBackgroundImage: function _getBackgroundImage(codeName) {
      return 'background-image: url(/images/cards/' + codeName + 'Background.svg)';
    }

  });
})();
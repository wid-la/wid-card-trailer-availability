'use strict';

(function () {
  Polymer({

    is: 'wid-card-trailer-availability',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

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
       * reefer
       * @type {String}
       */
      reefer: {
        type: String
      },

      /**
       * reefercont
       * @type {String}
       */
      reefercont: {
        type: String
      },

      /**
       * dry
       * @type {String}
       */
      dry: {
        type: String
      },

      /**
       * drycont
       * @type {String}
       */
      drycont: {
        type: String
      }
    },

    _getBackgroundImage: function _getBackgroundImage(codeName) {
      return 'background-image: url(/images/cards/' + codeName + 'Background.svg)';
    }

  });
})();
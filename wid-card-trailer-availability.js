"use strict";

(function () {
  Polymer({

    is: 'wid-card-trailer-availability',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * Active
       * @type {Boolean}
       */
      name: {
        type: String
      },

      /**
       * name
       * @type {String}
       */
      code_name: {
        type: String,
        value: "CAN"
      },

      /**
       * Status
       * @type {Number}
       */
      label: {
        type: String
      },

      /**
       * User
       * @type {String}
       */
      reefer: {
        type: String,
        value: "34"
      },

      /**
       * Datetime
       * @type {String}
       */
      dry: {
        type: String
      }
    },

    _getBackgroundImage: function _getBackgroundImage(code_name) {
      return 'background-image: url(../images/cards/' + code_name + 'Background.svg)';
    }

  });
})();
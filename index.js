/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-imdt-tabs',

  included: function (app) {
      this._super.included(app);

      app.import('vendor/ember-imdt-tabs.css');
  }
};

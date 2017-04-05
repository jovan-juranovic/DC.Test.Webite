(function () {
  'use strict';

  angular
    .module('dcTestWebsite')
    .factory('utility', utility);

  /** @ngInject */
  function utility() {
    return {
      generateUID: function () {
        return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    };
  }

})();
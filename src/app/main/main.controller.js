(function () {
  'use strict';

  angular
    .module('dcTestWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $scope) {
    var apiBaseUrl = 'http://localhost:64608/api/';
    var self = this;

    var createSimpleUid = function () {
      return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    var init = function () {
      $http.get(apiBaseUrl + "filters/info").then(function (response) {
        self.fields = response.data.fields;
        self.operators = response.data.operators;
        self.conditions = response.data.conditions;
      });
    };

    self.filters = [];
    self.fields = [];
    self.operators = [];
    self.conditions = [];

    self.getValues = function () {
      $http.get(apiBaseUrl + 'probe').then(function (response) {
        console.log(response);
      });
    };

    self.addFilter = function () {
      self.filters.push({
        id: createSimpleUid(),
        field: "",
        operator: "AND",
        condition: "",
        value: null
      });
    };

    self.removeFilter = function (id) {
      self.filters = self.filters.filter(function (item) {
        return item.id !== id;
      });
    }

    self.search = function () {
      $http.post(apiBaseUrl + "results/filter", self.filters).then(function(response) {
        console.log(response.data);
      });
    };

    init();
  }
})();

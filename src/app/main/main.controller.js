(function () {
  'use strict';

  angular
    .module('dcTestWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $q, graph, utility, toastr) {

    var vm = this;
    vm.initialized = false;

    var apiBaseUrl = 'http://localhost:64608/api/';

    var init = function () {
      var promises = [];

      var getAggregatedResult = $http.get(apiBaseUrl + "results");
      var getAggregatedResultsByYear = $http.get(apiBaseUrl + "results/byYear");
      var getFiltersInfo = $http.get(apiBaseUrl + "filters");
      var getLoanDistribution = $http.get(apiBaseUrl + "graph/loanDistribution");
      var getPropertyDistribution = $http.get(apiBaseUrl + "graph/propertyValueDistribution");
      var getIndexedLTFVDistribution = $http.get(apiBaseUrl + "graph/indexedLTFVDistribution");

      promises.push(getAggregatedResult, getAggregatedResultsByYear, getFiltersInfo, getLoanDistribution, getPropertyDistribution, getIndexedLTFVDistribution);

      $q.all(promises).then(function (responses) {
        vm.aggregatedResult = responses[0].data;
        vm.aggregatedResultsByYear = responses[1].data;
        vm.filters = responses[2].data;
        vm.loanDistribution = responses[3].data;
        vm.propertyDistribution = responses[4].data;
        vm.indexedLTFVDistribution = responses[5].data;

        vm.loanDistributionGraphConfig = graph.initLoanDistConfig(vm.loanDistribution, vm.aggregatedResultsByYear);
        vm.propertyDistributionGraphConfig = graph.initPropertyDistConfig(vm.propertyDistribution, vm.aggregatedResultsByYear);
        vm.indexedLTFVDistributionGraphConfig = graph.indexedLTFVDistributionGraphConfig(vm.indexedLTFVDistribution, vm.aggregatedResultsByYear);

        vm.filters.forEach(function (item) {
          item.id = utility.generateUID();
          item.operators.unshift("-- Operator --");
          item.conditions.unshift("-- Condition --");
        });

        vm.initialized = true;
      });
    };

    vm.aggregatedResult = {};
    vm.aggregatedResultsByYear = [];
    vm.loanDistribution = [];
    vm.propertyDistribution = [];
    vm.indexedLTFVDistribution = [];

    vm.loanDistributionGraphConfig = {};
    vm.propertyDistributionGraphConfig = {};
    vm.indexedLTFVDistributionGraphConfig = {};

    vm.filters = [];

    vm.getValues = function () {
      $http.get(apiBaseUrl + 'probe').then(function (response) {
        console.log(response);
      });
    };

    vm.clearFilter = function (id) {
      vm.filters.forEach(function (item) {
        if (item.id === id) {
          item.checked = false;
          item.operator = item.operators[0];
          item.firstCondition = item.conditions[0];
          item.secondCondition = item.conditions[0];
          item.firstValue = null;
          item.secondValue = null;
        }
      });
    };

    vm.search = function () {
      vm.initialized = false;
      var selectedFilters = [];
      var checkedFilters = vm.filters.filter(function (item) {
        return item.checked;
      });

      if (checkedFilters.length == 0) {
        toastr.warning("At least one filter should be selected.");
        return;
      }

      checkedFilters.forEach(function (item) {
        var operator = item.operator == item.operators[0] ? "" : item.operator;
        var firstCondition = item.firstCondition == item.conditions[0] ? "" : item.firstCondition;
        var secondCondition = item.secondCondition == item.conditions[0] ? "" : item.secondCondition;
        selectedFilters.push(
          {
            field: item.field,
            firstCondition: firstCondition,
            firstValue: item.firstValue,
            operator: operator,
            secondCondition: secondCondition,
            secondValue: item.secondValue
          });
      })

      var promises = [];

      var filterAggregatedResult = $http.post(apiBaseUrl + "results/filter", selectedFilters);
      var filterAggregatedResultsByYear = $http.post(apiBaseUrl + "results/byYear/filter", selectedFilters);
      var filterLoanDistribution = $http.post(apiBaseUrl + "graph/loanDistribution/filter", selectedFilters);
      var filterPropertyDistribution = $http.post(apiBaseUrl + "graph/propertyValueDistribution/filter", selectedFilters);
      var filterIndexedLTFVDistribution = $http.post(apiBaseUrl + "graph/indexedLTFVDistribution/filter", selectedFilters);

      promises.push(filterAggregatedResult, filterAggregatedResultsByYear, filterLoanDistribution, filterPropertyDistribution, filterIndexedLTFVDistribution);

      $q.all(promises)
        .then(function (responses) {
          vm.aggregatedResult = responses[0].data;
          vm.aggregatedResultsByYear = responses[1].data;
          vm.loanDistribution = responses[2].data;
          vm.propertyDistribution = responses[3].data;
          vm.indexedLTFVDistribution = responses[4].data;

          vm.loanDistributionGraphConfig = graph.initLoanDistConfig(vm.loanDistribution, vm.aggregatedResultsByYear);
          vm.propertyDistributionGraphConfig = graph.initPropertyDistConfig(vm.propertyDistribution, vm.aggregatedResultsByYear);
          vm.indexedLTFVDistributionGraphConfig = graph.indexedLTFVDistributionGraphConfig(vm.indexedLTFVDistribution, vm.aggregatedResultsByYear);

          vm.initialized = true;
        })
        .catch(function (error) {
          vm.initialized = true;
          toastr.error(error.data.message);
        });
    };

    init();
  }
})();

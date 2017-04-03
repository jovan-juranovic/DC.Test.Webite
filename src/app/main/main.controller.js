(function () {
  'use strict';

  angular
    .module('dcTestWebsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
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

    self.aggregatedResult = {
      "loanOriginationYear": null,
      "waOriginalPrincipalBalance": 108249.78587903162,
      "wadti": 23.458470850349393,
      "walti": 4.3474166250072184,
      "waTotalIncome": 49186.394563672,
      "waIndexedDTI": 16.251214199039918,
      "waIndexedLTI": 3.692208496248917,
      "waIndexedTotalIncome": 58078.648233925262,
      "waCurrentInterestRate": 4.8714823648321817,
      "waOriginalLTV": 93.777291976741921,
      "waOriginalLTFV": 107.03320324042437,
      "waOriginalForeclosureValue": 203957.95183141506,
      "waIndexedLTFV": 100.75236426671701
    };

    self.aggregatedResultsByYear = [
      {
        "loanOriginationYear": 1997,
        "waOriginalPrincipalBalance": 60962.044792314846,
        "wadti": 16.355991267695455,
        "walti": 2.8576841267566007,
        "waTotalIncome": 33655.56608374972,
        "waIndexedDTI": 13.360660696538325,
        "waIndexedLTI": 2.4529644408934828,
        "waIndexedTotalIncome": 39806.428149504449,
        "waCurrentInterestRate": 6.0118587242791488,
        "waOriginalLTV": 76.581643690671058,
        "waOriginalLTFV": 95.801203133013431,
        "waOriginalForeclosureValue": 102048.1405311968,
        "waIndexedLTFV": 48.837135923211825
      },
      {
        "loanOriginationYear": 2000,
        "waOriginalPrincipalBalance": 9075.6,
        "wadti": 19.908539164348298,
        "walti": 3.01,
        "waTotalIncome": 44255.37,
        "waIndexedDTI": 14.57,
        "waIndexedLTI": 2.53,
        "waIndexedTotalIncome": 52776.29,
        "waCurrentInterestRate": 6.4,
        "waOriginalLTV": 113.57,
        "waOriginalLTFV": 141,
        "waOriginalForeclosureValue": 110935.63,
        "waIndexedLTFV": 60.07
      },
      {
        "loanOriginationYear": 2005,
        "waOriginalPrincipalBalance": 111135.32809785115,
        "wadti": 23.52758710971284,
        "walti": 4.3589301938956906,
        "waTotalIncome": 49460.869707777376,
        "waIndexedDTI": 16.261634525064082,
        "waIndexedLTI": 3.7018219471965557,
        "waIndexedTotalIncome": 58398.865271292874,
        "waCurrentInterestRate": 4.8367911135052264,
        "waOriginalLTV": 94.17986379770727,
        "waOriginalLTFV": 107.41254528388357,
        "waOriginalForeclosureValue": 204903.37889882416,
        "waIndexedLTFV": 101.50807791539282
      },
      {
        "loanOriginationYear": 2006,
        "waOriginalPrincipalBalance": 22104.082333887938,
        "wadti": 21.96673440754207,
        "walti": 4.2289149294436967,
        "waTotalIncome": 48816.699423834616,
        "waIndexedDTI": 15.95866956964173,
        "waIndexedLTI": 3.6361581079549361,
        "waIndexedTotalIncome": 57174.476988984134,
        "waCurrentInterestRate": 5.2047281587255156,
        "waOriginalLTV": 95.416311916801291,
        "waOriginalLTFV": 110.66343560563993,
        "waOriginalForeclosureValue": 186016.59419765868,
        "waIndexedLTFV": 101.11695746046665
      },
      {
        "loanOriginationYear": 2007,
        "waOriginalPrincipalBalance": 21428.779506912226,
        "wadti": 22.412037189251652,
        "walti": 4.445792731816895,
        "waTotalIncome": 49324.034515715481,
        "waIndexedDTI": 16.111806273326344,
        "waIndexedLTI": 3.774002844598896,
        "waIndexedTotalIncome": 58031.1839147641,
        "waCurrentInterestRate": 5.3556961703238413,
        "waOriginalLTV": 84.309909085344387,
        "waOriginalLTFV": 97.753363821892918,
        "waOriginalForeclosureValue": 227703.39810443783,
        "waIndexedLTFV": 96.257191267825988
      },
      {
        "loanOriginationYear": 2008,
        "waOriginalPrincipalBalance": 35157.287825002823,
        "wadti": 25.45839439438722,
        "walti": 4.7056776208731641,
        "waTotalIncome": 40729.062685424353,
        "waIndexedDTI": 17.818097731579339,
        "waIndexedLTI": 3.93410965607942,
        "waIndexedTotalIncome": 48655.260440970793,
        "waCurrentInterestRate": 5.7159347623655972,
        "waOriginalLTV": 86.343740403351674,
        "waOriginalLTFV": 96.170215269463824,
        "waOriginalForeclosureValue": 195271.19344368627,
        "waIndexedLTFV": 94.584325850244454
      },
      {
        "loanOriginationYear": 2009,
        "waOriginalPrincipalBalance": 27187.12522540821,
        "wadti": 25.312463946233851,
        "walti": 4.8130234513707606,
        "waTotalIncome": 51416.738418794739,
        "waIndexedDTI": 18.095191187926726,
        "waIndexedLTI": 4.1008438983800426,
        "waIndexedTotalIncome": 61150.640480192145,
        "waCurrentInterestRate": 6.109789530177399,
        "waOriginalLTV": 85.446061905166047,
        "waOriginalLTFV": 95.227315376284153,
        "waOriginalForeclosureValue": 253116.7595560721,
        "waIndexedLTFV": 96.267648900078669
      },
      {
        "loanOriginationYear": 2010,
        "waOriginalPrincipalBalance": 23016.418366940128,
        "wadti": 21.993988114443805,
        "walti": 4.39860282323415,
        "waTotalIncome": 43569.640109158667,
        "waIndexedDTI": 16.525271973715302,
        "waIndexedLTI": 3.808289082751227,
        "waIndexedTotalIncome": 50810.792972459058,
        "waCurrentInterestRate": 5.4458513084529558,
        "waOriginalLTV": 78.9896708077491,
        "waOriginalLTFV": 89.235760973907219,
        "waOriginalForeclosureValue": 223302.08567348172,
        "waIndexedLTFV": 88.886396877256857
      },
      {
        "loanOriginationYear": 2011,
        "waOriginalPrincipalBalance": 14398.934485807195,
        "wadti": 26.951416274299127,
        "walti": 4.7300095874967862,
        "waTotalIncome": 41656.812089776911,
        "waIndexedDTI": 17.148761339009511,
        "waIndexedLTI": 4.0028002225652761,
        "waIndexedTotalIncome": 49497.994343399921,
        "waCurrentInterestRate": 5.4892048362926085,
        "waOriginalLTV": 89.2931000272472,
        "waOriginalLTFV": 101.29166613324584,
        "waOriginalForeclosureValue": 200453.32232118942,
        "waIndexedLTFV": 102.61112228412581
      }
    ];

    self.loanDistribution = [
      {
        "loanOriginationYear": 1997,
        "numberOfLoans": 19
      },
      {
        "loanOriginationYear": 2000,
        "numberOfLoans": 1
      },
      {
        "loanOriginationYear": 2005,
        "numberOfLoans": 871
      },
      {
        "loanOriginationYear": 2006,
        "numberOfLoans": 19
      },
      {
        "loanOriginationYear": 2007,
        "numberOfLoans": 22
      },
      {
        "loanOriginationYear": 2008,
        "numberOfLoans": 28
      },
      {
        "loanOriginationYear": 2009,
        "numberOfLoans": 22
      },
      {
        "loanOriginationYear": 2010,
        "numberOfLoans": 10
      },
      {
        "loanOriginationYear": 2011,
        "numberOfLoans": 6
      }
    ];

    self.loanDistributionGraphConfig = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Loan Distribution By Year'
      },
      xAxis: {
        categories: self.loanDistribution.map(function (item) { return item.loanOriginationYear; }),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Loans'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">Origination year: {point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">WA Original Principal Balance: </td>' +
        '<td style="padding:0">{point.waOriginalPrincipalBalance}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA DTI: </td>' +
        '<td style="padding:0">{point.wadti}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA LTI: </td>' +
        '<td style="padding:0">{point.walti}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Total Income: </td>' +
        '<td style="padding:0">{point.waTotalIncome}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Indexed DTI: </td>' +
        '<td style="padding:0">{point.waIndexedDTI}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Indexed LTI: </td>' +
        '<td style="padding:0">{point.waIndexedLTI}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Indexed Total Income: </td>' +
        '<td style="padding:0">{point.waIndexedTotalIncome}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Current Interest Rate: </td>' +
        '<td style="padding:0">{point.waCurrentInterestRate}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Original LTV: </td>' +
        '<td style="padding:0">{point.waOriginalLTV}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Original LTFV: </td>' +
        '<td style="padding:0">{point.waOriginalLTFV}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Original Foreclosure Value: </td>' +
        '<td style="padding:0">{point.waOriginalForeclosureValue}</td></tr>' +
        '<tr><td style="color:{series.color};padding:0">WA Indexed LTFV: </td>' +
        '<td style="padding:0">{point.waIndexedLTFV}</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.01,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Number of Loans',
        data: self.loanDistribution.map(function (item) {
          return {
            y: item.numberOfLoans,
            waOriginalPrincipalBalance: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waOriginalPrincipalBalance;
              }),
            wadti: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.wadti;
              }),
            walti: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.walti;
              }),
            waTotalIncome: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waTotalIncome;
              }),
            waIndexedDTI: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waIndexedDTI;
              }),
            waIndexedLTI: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waIndexedLTI;
              }),
            waIndexedTotalIncome: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waIndexedTotalIncome;
              }),
            waCurrentInterestRate: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waCurrentInterestRate;
              }),
            waOriginalLTV: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waOriginalLTV;
              }),
            waOriginalLTFV: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waOriginalLTFV;
              }),
            waOriginalForeclosureValue: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waOriginalForeclosureValue;
              }),
            waIndexedLTFV: self.aggregatedResultsByYear
              .filter(function (result) {
                return item.loanOriginationYear === result.loanOriginationYear;
              })
              .map(function (x) {
                return x.waIndexedLTFV;
              })
          };
        })
      }]
    };

    self.propertyDistributionGraphConfig = {
      
    }

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
      $http.post(apiBaseUrl + "results/filter", self.filters).then(function (response) {
        console.log(response.data);
      });
    };

    init();
  }
})();

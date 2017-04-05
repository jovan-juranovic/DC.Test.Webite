(function () {
  'use strict';

  angular
    .module('dcTestWebsite')
    .factory('graph', graph);

  /** @ngInject */
  function graph() {
    return {
      initLoanDistConfig: function (distributionData, aggregatedResults) {
        return {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Loan Distribution By Year'
          },
          xAxis: {
            categories: distributionData.map(function (item) { return item.loanOriginationYear; }),
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Number of Loans'
            }
          },
          tooltip: {
            headerFormat: '<span style="color:{series.color};font-size:10px">Origination year: {point.key} | Number of Loans: {point.y}</span><table>',
            pointFormat: '<tr><td style="padding:0">WA Original Principal Balance: </td>' +
            '<td style="padding:0">{point.waOriginalPrincipalBalance:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA DTI: </td>' +
            '<td style="padding:0">{point.wadti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA LTI: </td>' +
            '<td style="padding:0">{point.walti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Total Income: </td>' +
            '<td style="padding:0">{point.waTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed DTI: </td>' +
            '<td style="padding:0">{point.waIndexedDTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTI: </td>' +
            '<td style="padding:0">{point.waIndexedLTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed Total Income: </td>' +
            '<td style="padding:0">{point.waIndexedTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Current Interest Rate: </td>' +
            '<td style="padding:0">{point.waCurrentInterestRate:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTV: </td>' +
            '<td style="padding:0">{point.waOriginalLTV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTFV: </td>' +
            '<td style="padding:0">{point.waOriginalLTFV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original Foreclosure Value: </td>' +
            '<td style="padding:0">{point.waOriginalForeclosureValue:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTFV: </td>' +
            '<td style="padding:0">{point.waIndexedLTFV:,.2f}</td></tr>',
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
            data: distributionData.map(function (item) {
              return {
                y: item.numberOfLoans,
                waOriginalPrincipalBalance: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalPrincipalBalance;
                  }),
                wadti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.wadti;
                  }),
                walti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.walti;
                  }),
                waTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waTotalIncome;
                  }),
                waIndexedDTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedDTI;
                  }),
                waIndexedLTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedLTI;
                  }),
                waIndexedTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedTotalIncome;
                  }),
                waCurrentInterestRate: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waCurrentInterestRate;
                  }),
                waOriginalLTV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTV;
                  }),
                waOriginalLTFV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTFV;
                  }),
                waOriginalForeclosureValue: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalForeclosureValue;
                  }),
                waIndexedLTFV: aggregatedResults
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
      },
      initPropertyDistConfig: function (distributionData, aggregatedResults) {
        return {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Average Original Property Value Distribution By Year'
          },
          xAxis: {
            categories: distributionData.map(function (item) { return item.loanOriginationYear; }),
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Average Original Property Value'
            }
          },
          tooltip: {
            headerFormat: '<span style="color:{series.color};font-size:10px">Origination year: {point.key} | Average Value: {point.y:,.2f}</span><table>',
            pointFormat: '<tr><td style="padding:0">WA Original Principal Balance: </td>' +
            '<td style="padding:0">{point.waOriginalPrincipalBalance:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA DTI: </td>' +
            '<td style="padding:0">{point.wadti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA LTI: </td>' +
            '<td style="padding:0">{point.walti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Total Income: </td>' +
            '<td style="padding:0">{point.waTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed DTI: </td>' +
            '<td style="padding:0">{point.waIndexedDTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTI: </td>' +
            '<td style="padding:0">{point.waIndexedLTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed Total Income: </td>' +
            '<td style="padding:0">{point.waIndexedTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Current Interest Rate: </td>' +
            '<td style="padding:0">{point.waCurrentInterestRate:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTV: </td>' +
            '<td style="padding:0">{point.waOriginalLTV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTFV: </td>' +
            '<td style="padding:0">{point.waOriginalLTFV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original Foreclosure Value: </td>' +
            '<td style="padding:0">{point.waOriginalForeclosureValue:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTFV: </td>' +
            '<td style="padding:0">{point.waIndexedLTFV:,.2f}</td></tr>',
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
            name: 'Average Value',
            data: distributionData.map(function (item) {
              return {
                y: item.averageOriginalPropertyValue,
                waOriginalPrincipalBalance: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalPrincipalBalance;
                  }),
                wadti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.wadti;
                  }),
                walti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.walti;
                  }),
                waTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waTotalIncome;
                  }),
                waIndexedDTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedDTI;
                  }),
                waIndexedLTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedLTI;
                  }),
                waIndexedTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedTotalIncome;
                  }),
                waCurrentInterestRate: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waCurrentInterestRate;
                  }),
                waOriginalLTV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTV;
                  }),
                waOriginalLTFV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTFV;
                  }),
                waOriginalForeclosureValue: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalForeclosureValue;
                  }),
                waIndexedLTFV: aggregatedResults
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
      },
      indexedLTFVDistributionGraphConfig: function (distributionData, aggregatedResults) {
        return {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Average Indexed LTFV Distribution By Year'
          },
          xAxis: {
            categories: distributionData.map(function (item) { return item.loanOriginationYear; }),
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Average Indexed LTFV'
            }
          },
          tooltip: {
            headerFormat: '<span style="color:{series.color};font-size:10px">Origination year: {point.key} | Average Value: {point.y:,.2f}</span><table>',
            pointFormat: '<tr><td style="padding:0">WA Original Principal Balance: </td>' +
            '<td style="padding:0">{point.waOriginalPrincipalBalance:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA DTI: </td>' +
            '<td style="padding:0">{point.wadti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA LTI: </td>' +
            '<td style="padding:0">{point.walti:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Total Income: </td>' +
            '<td style="padding:0">{point.waTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed DTI: </td>' +
            '<td style="padding:0">{point.waIndexedDTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTI: </td>' +
            '<td style="padding:0">{point.waIndexedLTI:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed Total Income: </td>' +
            '<td style="padding:0">{point.waIndexedTotalIncome:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Current Interest Rate: </td>' +
            '<td style="padding:0">{point.waCurrentInterestRate:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTV: </td>' +
            '<td style="padding:0">{point.waOriginalLTV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original LTFV: </td>' +
            '<td style="padding:0">{point.waOriginalLTFV:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Original Foreclosure Value: </td>' +
            '<td style="padding:0">{point.waOriginalForeclosureValue:,.2f}</td></tr>' +
            '<tr><td style="padding:0">WA Indexed LTFV: </td>' +
            '<td style="padding:0">{point.waIndexedLTFV:,.2f}</td></tr>',
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
            name: 'Average Value',
            data: distributionData.map(function (item) {
              return {
                y: item.averageIndexedLTFV,
                waOriginalPrincipalBalance: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalPrincipalBalance;
                  }),
                wadti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.wadti;
                  }),
                walti: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.walti;
                  }),
                waTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waTotalIncome;
                  }),
                waIndexedDTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedDTI;
                  }),
                waIndexedLTI: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedLTI;
                  }),
                waIndexedTotalIncome: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waIndexedTotalIncome;
                  }),
                waCurrentInterestRate: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waCurrentInterestRate;
                  }),
                waOriginalLTV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTV;
                  }),
                waOriginalLTFV: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalLTFV;
                  }),
                waOriginalForeclosureValue: aggregatedResults
                  .filter(function (result) {
                    return item.loanOriginationYear === result.loanOriginationYear;
                  })
                  .map(function (x) {
                    return x.waOriginalForeclosureValue;
                  }),
                waIndexedLTFV: aggregatedResults
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
      }
    };
  }

})();
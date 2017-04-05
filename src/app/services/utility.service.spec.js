(function () {
  'use strict';

  describe("generateUID", function () {
    var uid;
    var utility;
    beforeEach(module('dcTestWebsite'));
    beforeEach(inject(function (utility) {
      utility = utility;
    }));

    describe("when executed", function () {
      act = function () {
        uid = utility.generateUID();
      }

      it("should contain value", function () {
        expect(uid).toBeDefined();
        expect(uid.length).toBeGreaterThan(0);
      })
    })
  })

})();
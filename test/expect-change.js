
describe("expect-change", function() {
  it("change interface should be exist", function() {
    expect(expect().change).to.be.a(Function);
  });

  describe("#change()", function() {
    it("should not raise error when there is change", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 101; }).to
          .change(function() { return cnt; });
      }).to.not.throwException();;
    });

    it("should raise error when there is no change", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 0; }).to
          .change(function() { return cnt; });
      }).to.throwException();;
    });
  });

  describe("#to()", function() {
    it("should not raise error when actual value is changed to expected value", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 101; }).to
          .change(function() { return cnt; }).to(101);
      }).to.not.throwException();
    });

    it("should raise error when actual value is not changed to expected value", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 0; }).to
          .change(function() { return cnt; }).to(101);
      }).to.throwException();
    });
  });

  describe("#from()", function() {
    it("should not raise error when actual value is changed from expected value", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 101; }).to
          .change(function() { return cnt; }).from(0);
      }).to.not.throwException();
    });

    it("should raise error when actual value is not changed from expected value", function() {
      expect(function() {
        var cnt = 0;
        expect(function() { cnt = 101; }).to
          .change(function() { return cnt; }).from(10);
      }).to.throwException();
    });
  });
});
describe("#binToDec", function() {
  it("converts a binary string to decimal", function() {
    expect(binToDec("0")).to.equal("0")
    expect(binToDec("1001101111")).to.equal("623")
  });
});

describe("#triToDec", function() {
  it("converts a trinary string to decimal", function() {
    expect(triToDec("2120")).to.equal("69")
    expect(triToDec("2110200121")).to.equal("48616")
  });
});

describe("#hexToDec", function() {
  it("converts a hexadecimal string to decimal", function() {
    expect(hexToDec("afa103")).to.equal("11510019")
    expect(hexToDec("ab4f2")).to.equal("701682")
  });
});

describe("#anyToDec", function() {
  it("converts any base string to decimal", function() {
    //expect(anyToDec("123", 4)).to.equal(27)
    expect(anyToDec("123", 8)).to.equal(83)
    expect(anyToDec("abf123", 16)).to.equal(11268387)
  });
});

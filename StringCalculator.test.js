const add = require("./StringCalculator"); //Import our calculator

it("should return the sum of multiple numbers", () => {
    expect(add("0,1,2")).toBe(3);
});

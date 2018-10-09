const add = require("./StringCalculator"); //Import our calculator

it("should return the sum of multiple numbers", () => {
    expect(add("0,1,2")).toBe(3);
});

it("should return 0 if the input is an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return 1 if the input is 1", () => {
    expect(add("1")).toBe(1);
});

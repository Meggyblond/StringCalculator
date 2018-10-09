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

it("should return the sum of multiple numbers", () => {
    expect(add("0,1,2,3,4,5")).toBe(15);
});

it("should return the sum of multiple numbers", () => {
    expect(add("0,1")).toBe(1);
});

it("should return the sum of multiple numbers", () => {
    expect(add("0,1,2,3,4,5,6,7,8,9,10")).toBe(55);
});

it("should return the sum of multiple numbers with , and new line separator", () => {
    expect(add("1\n2\n3")).toBe(6);
});

it("should return the sum of multiple numbers with , and new line separator", () => {
    expect(add("0,1\n2\n3,4")).toBe(10);
});

it("should throw exception Negatives not allowed: -3,", () => {
    expect(() => {add("-3")}).toThrowError("Negatives not allowed: -3");
});


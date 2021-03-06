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

it("should throw exception Negatives not allowed: -1,-2,", () => {
    expect(() => {add("-1,-2")}).toThrowError("Negatives not allowed: -1,-2");
});

it("should throw exception Negatives not allowed: -9, -2, -8, -10, -1", () => {
    expect(() => {add("1,5,9,-9,400,-2,-8,-10,200,-1,12,11")}).toThrowError("Negatives not allowed: -9,-2,-8,-10,-1");
});

it("should ignore numbers bigger than 1000", () => {
    expect(add("1001")).toBe(0);
});

it("should let combined numbers be over 1000", () => {
    expect(add("501,500")).toBe(1001);
});

it("should ignore numbers bigger than 1000", () => {
    expect(add("10001,2")).toBe(2);
});

it("should ignore numbers bigger than 1000", () => {
    expect(add("10001,2,2000,5,3000,3000,3000,3000,3000,3000,3")).toBe(10);
});

it("should handle the ; delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});

it("should handle different delimiters", () => {
    expect(add("//;\n1;2,3,4;5")).toBe(15);
});

it("should handle different delimiters", () => {
    expect(add("//%\n1%2%3%4,5\n6%7\n8,9,10")).toBe(55);
});

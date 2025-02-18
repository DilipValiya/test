const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  test("fizzBuzz function exist", () => {
    fizzBuzz(10);
  });
  test("should return fizz if number is divisible by 3", () => {
    const result = fizzBuzz(6);
    expect(result).toBe("fizz");
  });
  test("should return buzz if number is divisible by 5", () => {
    const result = fizzBuzz(10);
    expect(result).toBe("buzz");
  });
  test("should return buzz if number is divisible by both 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("fizzbuzz");
  });
  test("should return number in string formate if number is nigher divisible by 3 nor by 5", () => {
    const result = fizzBuzz(7);
    expect(result).toBe("7");
  });
});

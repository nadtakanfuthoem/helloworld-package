import { add, divide, subtract } from "./utils.js";
import { test, expect } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

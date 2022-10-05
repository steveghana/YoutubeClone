import { ReturnName } from "utils/Utilities";

test("should return name", () => {
  const name = ReturnName("steve", "bob");
  expect(name).toBe("steve");
});

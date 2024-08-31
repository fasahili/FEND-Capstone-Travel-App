const { updateUI } = require("../updateUI");

describe("updateUI() function", () => {
  test("should be defined", async () => {
    expect(updateUI).toBeDefined();
  });

  test("should be a function", async () => {
    expect(typeof updateUI).toBe("function");
  });
});

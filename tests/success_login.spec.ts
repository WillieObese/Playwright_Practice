import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to URL", async () => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });

  await test.step("Enter Username and password", async () => {
    await page.locator('input[name="username"]').fill("william_obese");
    await page.locator('input[name="password"]').fill("Digital123!");
  });

  await test.step("Validate successful login", async () => {
    await page.getByRole("button", { name: "Log In" }).click();
    await expect(page.locator("tfoot")).toContainText(
      "*Balance includes deposits that may be subject to holds"
    );
  });
});

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to URL", async () => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });

  await test.step("Navigate to URL", async () => {
    await page.locator('input[name="username"]').fill("william_obese");
    await page.locator('input[name="password"]').fill("Digital123!");
    await page.getByRole("button", { name: "Log In" }).click();
  });

  await test.step("Transfer funds", async () => {
    await page.getByRole("link", { name: "Transfer Funds" }).click();
    await page.locator("#amount").fill("1");
    await page.locator("#fromAccountId").selectOption("13122");
    await page.locator("#toAccountId").selectOption("16785");
    await page.getByRole("button", { name: "Transfer" }).click();
  });

  await test.step("Validate Transfer", async () => {
    await expect(page.locator("#showResult")).toContainText(
      "Transfer Complete!"
    );
  });
});

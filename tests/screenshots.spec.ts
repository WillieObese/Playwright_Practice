import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to URL", async () => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole("link", { name: "Register" }).click();
  });

  await test.step("Enter Details", async () => {
    await page.locator("#customer\\.firstName").fill("William");
    await page.locator("#customer\\.lastName").fill("Obese");
    await page.locator("#customer\\.address\\.street").fill("accra");
    await page.locator("#customer\\.address\\.city").fill("newtown");
    await page.locator("#customer\\.address\\.state").fill("accra");
    await page.locator("#customer\\.address\\.zipCode").fill("ms199");
    await page.locator("#customer\\.phoneNumber").fill("208033577");
    await page.locator("#customer\\.ssn").fill("12345678");
    await page.locator("#customer\\.username").fill("willk_bill");
    await page.locator("#customer\\.password").fill("Newman");
    await page.locator("#repeatedPassword").fill("Newman");
  });

  await test.step("Validate successful login", async () => {
    await page.getByRole("button", { name: "Register" }).click();
    await expect(page.locator("#rightPanel")).toContainText(
      "Your account was created successfully. You are now logged in."
    );
  });


  await test.step("capture screenshot", async () => {
        await page.locator('#rightPanel').screenshot({path:'./screenshots/test1.png'});
        await page.screenshot({path:'./screenshots/test2.png'});

    });

});

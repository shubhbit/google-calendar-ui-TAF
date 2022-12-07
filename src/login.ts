import { expect, Locator, Page } from "@playwright/test";

export class GoogleLogin {
  readonly page: Page;
  readonly baseUrl: string;
  readonly user: Locator;
  readonly password: Locator;
  readonly userNext: Locator;
  readonly passwordNext: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://calendar.google.com/calendar";
    this.user = page.getByRole("textbox", { name: "Email or phone" });
    this.password = page.getByRole("textbox", { name: "Enter your password" });
    this.userNext = page.getByRole("button", { name: "Next" });
    this.passwordNext = page.locator("#passwordNext");
  }

  async login(user: string, password: string) {
    await this.page.goto(this.baseUrl);
    await this.user.waitFor({ state: "visible" });
    await this.user.fill(user);
    await this.userNext.waitFor({ state: "visible" });
    await this.userNext.click();
    await this.password.waitFor({ state: "visible" });
    await this.password.fill(password);
    await this.passwordNext.waitFor({ state: "visible" });
    await this.passwordNext.click();
  }
}

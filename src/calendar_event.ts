import { expect, Locator, Page } from "@playwright/test";
import { GoogleLogin } from "./login";


export class CalendarEvents {
  readonly page: Page;
  readonly calURL: string
  readonly createButton: Locator;
  readonly menuEvent: Locator;
  readonly title: Locator;
  readonly startTime: Locator;
  readonly endTime: Locator;
  readonly saveButton: Locator;
  readonly calendarHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createButton = page.getByRole("button", { name: "Create" });
    this.menuEvent = page.getByRole("menuitem", { name: "Event" });
    this.title = page.getByRole("textbox", { name: "Add title" });
    this.startTime = page.getByRole("combobox", { name: "Start time" });
    this.endTime = page.getByRole("combobox", { name: "End time" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.calendarHeading = page.getByRole("heading", { name: "Calendar" });
  }

  async goto(user: string, password: string) {
    const google = new GoogleLogin(this.page);
    await google.login(user, password);
    await this.page.waitForURL(`${google.baseUrl}/u/0/r`)
  }
  async createEvent(title: string, startTime: string, endTime: string) {

    await this.page.waitForTimeout(2 * 1000);
    await this.createButton.click({ timeout: 1 * 60 * 1000 });
    await this.page.waitForTimeout(2 * 1000);
    await this.menuEvent.click({ timeout: 1 * 60 * 1000 });
    await this.title.fill(title);
    await this.saveButton.click();
  }
}

import { expect, Locator, Page } from "@playwright/test";
import { GoogleLogin } from "./login";
import { waitForStability, getUser, getPassword } from "../utility/util";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// const google = new GoogleLogin(page);

export class CalendarEvents {
  readonly page: Page;
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
    this.menuEvent = page
      .getByRole("menuitem", { name: "Event" })
      .getByText("Event");
    this.title = page.getByRole("textbox", { name: "Add title" });
    this.startTime = page.getByRole("combobox", { name: "Start time" });
    this.endTime = page.getByRole("combobox", { name: "End time" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.calendarHeading = page.getByRole("heading", { name: "Calendar" });
  }

  async goto() {
    const google = new GoogleLogin(this.page);
    await google.login(getUser(), getPassword());
  }
  async createEvent(title: string, startTime: string, endTime: string) {
    await this.page.waitForURL("https://calendar.google.com/calendar/u/0/r");
    await this.page
      .getByRole("button", { name: "Create" })
      .click({ timeout: 1 * 60 * 1000 });
    await this.page
      .getByRole("menuitem", { name: "Event" })
      .getByText("Event")
      .click({ timeout: 1 * 60 * 1000 });
    await this.title.fill(title);
    await this.saveButton.click();
  }
}

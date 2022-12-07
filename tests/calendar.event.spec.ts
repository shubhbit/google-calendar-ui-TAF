import { test, expect } from "@playwright/test";
import { CalendarEvents } from "../src/calendar_event";
import { getUser, getPassword, randomString } from "../utility/util";

test("test event creation with start and end time", async ({ page }) => {
  const calendarEvent = new CalendarEvents(page);
  const title = randomString();
  await calendarEvent.goto(getUser(), getPassword());
  await calendarEvent.createEvent(title, "16:00", "17:00");
  expect(await page.locator(`button:has-text("${title}")`).isVisible()).resolves  
  // `This is ${soMany} times easier!`
  // `text=${title}`
});

// test("test event creation with all day", async ({ page }) => {
//   const calendarEvent = new CalendarEvents(page);
//   await calendarEvent.goto(getUser(),  getPassword());
//   await calendarEvent.createEvent("Test Event", "16:00", "17:00")
// });


import { test, expect } from "@playwright/test";
import { CalendarEvents } from "../src/calendar_event";

test("Event creation", async ({ page }) => {
  const calendarEvent = new CalendarEvents(page);
  await calendarEvent.goto();
  await calendarEvent.createEvent("Test Event", "16:00", "17:00")
});

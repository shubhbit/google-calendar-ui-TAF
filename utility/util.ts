
import { expect, Locator, Page } from "@playwright/test";

export async function waitForStability(page: Page){
await page.waitForLoadState('domcontentloaded', { timeout: 15000 });
await page.waitForLoadState('load', { timeout: 30000 });
await page.waitForLoadState('networkidle', { timeout: 15000 });
}

import * as dotenv from "dotenv";

dotenv.config({ path: ".env.testing" });

export function getUser(): string {
    return `${process.env.USER}`;
  }

export function getPassword(): string {
    return `${process.env.PASSWORD}`;
  }
import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('generated flow @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  await expect(page.locator('input[name="email"][type="email"]')).toBeVisible();
  await page.locator('input[name="email"][type="email"]').fill(testData.email);

  await expect(page.locator('input[name="password"][type="password"]')).toBeVisible();
  await page.locator('input[name="password"][type="password"]').fill(testData.password);

  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Sign in with Email', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign in with Email', exact: true }).click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }).click();

  await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeEnabled();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();

  await page.waitForLoadState('domcontentloaded');

});
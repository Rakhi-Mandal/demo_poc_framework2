import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('generated flow @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email', exact: true }));

  await heal(page, 'email field', 'visible', null,
    () => page.locator('input[name="email"][type="email"]'));
  await heal(page, 'email field', 'fill', testData.email,
    () => page.locator('input[name="email"][type="email"]'));

  await heal(page, 'password field', 'visible', null,
    () => page.locator('input[name="password"][type="password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('input[name="password"][type="password"]'));

  await heal(page, 'sign in with email button', 'click', null,
    () => page.getByRole('button', { name: 'Sign in with Email', exact: true }));

  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'kishore battula fortis solutions group button', 'click', null,
    () => page.getByRole('button', { name: 'Kishore Battula Fortis Solutions Group', exact: true }));

  await heal(page, 'logout link', 'click', null,
    () => page.getByRole('link', { name: 'Logout', exact: true }));

  await page.waitForLoadState('domcontentloaded');

});
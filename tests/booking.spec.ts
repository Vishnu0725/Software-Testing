import { test, expect } from '@playwright/test';

const seat = (id: string) => `[data-seat="${id}"]`;

test.describe('CineBook seat selection and booking flow', () => {
  test('TC01 @smoke page loads with movie and booking summary', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/CineBook/);
    await expect(page.getByRole('heading', { name: 'Galaxy Run' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Booking summary' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Confirm booking' })).toBeDisabled();
  });

  test('TC02 @smoke select one available seat and update summary', async ({ page }) => {
    await page.goto('/');
    await page.locator(seat('A1')).click();
    await expect(page.locator('#seatValue')).toHaveText('A1');
    await expect(page.locator('#ticketCount')).toHaveText('1');
    await expect(page.locator('#total')).toHaveText('₹198');
    await expect(page.getByRole('button', { name: 'Confirm booking' })).toBeEnabled();
  });

  test('TC03 selecting multiple seats calculates total and fee', async ({ page }) => {
    await page.goto('/');
    await page.locator(seat('A1')).click();
    await page.locator(seat('A2')).click();
    await page.locator(seat('B1')).click();
    await expect(page.locator('#ticketCount')).toHaveText('3');
    await expect(page.locator('#fee')).toHaveText('₹54');
    await expect(page.locator('#total')).toHaveText('₹594');
  });

  test('TC04 booked seats cannot be selected', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(seat('A3'))).toBeDisabled();
    await expect(page.locator(seat('A4'))).toBeDisabled();
    await expect(page.locator(seat('C2'))).toBeDisabled();
  });

  test('TC05 toggle a selected seat off recalculates totals', async ({ page }) => {
    await page.goto('/');
    await page.locator(seat('A1')).click();
    await page.locator(seat('A2')).click();
    await page.locator(seat('A1')).click();
    await expect(page.locator('#seatValue')).toHaveText('A2');
    await expect(page.locator('#ticketCount')).toHaveText('1');
    await expect(page.locator('#total')).toHaveText('₹198');
  });

  test('TC06 max six seats enforced', async ({ page }) => {
    await page.goto('/');
    for (const id of ['A1','A2','A5','A6','A7','A8']) await page.locator(seat(id)).click();
    await page.locator(seat('B1')).click();
    await expect(page.locator('#ticketCount')).toHaveText('6');
    await expect(page.getByRole('status')).toContainText('maximum of 6 seats');
  });

  test('TC07 date selection updates booking summary', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Tomorrow' }).click();
    await expect(page.locator('#dateValue')).toHaveText('Tomorrow');
    await expect(page.getByRole('button', { name: 'Tomorrow' })).toHaveClass(/selected/);
  });

  test('TC08 showtime selection updates booking summary', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: '6:45 PM' }).click();
    await expect(page.locator('#timeValue')).toHaveText('6:45 PM');
    await expect(page.getByRole('button', { name: '6:45 PM' })).toHaveClass(/selected/);
  });

  test('TC09 clear selection resets seat count, price and booking button', async ({ page }) => {
    await page.goto('/');
    await page.locator(seat('A1')).click();
    await page.locator(seat('A2')).click();
    await page.getByRole('button', { name: 'Clear selected seats' }).click();
    await expect(page.locator('#seatValue')).toHaveText('None');
    await expect(page.locator('#ticketCount')).toHaveText('0');
    await expect(page.locator('#total')).toHaveText('₹0');
    await expect(page.getByRole('button', { name: 'Confirm booking' })).toBeDisabled();
  });

  test('TC10 booking confirmation shows chosen seats, show and total', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Tomorrow' }).click();
    await page.getByRole('button', { name: '2:15 PM' }).click();
    await page.locator(seat('B1')).click();
    await page.locator(seat('B2')).click();
    await page.getByRole('button', { name: 'Confirm booking' }).click();
    await expect(page.getByRole('status')).toContainText('Booking confirmed!');
    await expect(page.getByRole('status')).toContainText('B1, B2');
    await expect(page.getByRole('status')).toContainText('Tomorrow');
    await expect(page.getByRole('status')).toContainText('2:15 PM');
    await expect(page.getByRole('status')).toContainText('₹396');
  });
});

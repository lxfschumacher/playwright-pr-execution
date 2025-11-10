import { test, expect } from '@playwright/test';

test.describe('Vue 3 Test Project', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Vue 3 Test Project');
  });

  test.describe('SearchBox Component', () => {
    test('should render search input', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
    });

    test('should update search query on input', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      await searchInput.fill('John');
      
      const searchResult = page.getByTestId('search-result');
      await expect(searchResult).toBeVisible();
      await expect(searchResult).toContainText('Searching for: John');
    });

    test('should show clear button when search has value', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      const clearButton = page.getByTestId('clear-button');
      
      // Clear button should not be visible initially
      await expect(clearButton).not.toBeVisible();
      
      // Type something
      await searchInput.fill('test');
      
      // Clear button should now be visible
      await expect(clearButton).toBeVisible();
    });

    test('should clear search when clicking clear button', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      const clearButton = page.getByTestId('clear-button');
      
      // Type something
      await searchInput.fill('test');
      await expect(searchInput).toHaveValue('test');
      
      // Click clear button
      await clearButton.click();
      
      // Input should be empty
      await expect(searchInput).toHaveValue('');
      await expect(clearButton).not.toBeVisible();
    });
  });

  test.describe('InputField Component', () => {
    test('should render name and email input fields', async ({ page }) => {
      const nameInput = page.getByTestId('name-input').locator('[data-testid="input-field"]');
      const emailInput = page.getByTestId('email-input').locator('[data-testid="input-field"]');
      
      await expect(nameInput).toBeVisible();
      await expect(emailInput).toBeVisible();
      
      await expect(nameInput).toHaveAttribute('placeholder', 'Enter your name');
      await expect(emailInput).toHaveAttribute('placeholder', 'Enter your email');
    });

    test('should update user info when typing in input fields', async ({ page }) => {
      const nameInput = page.getByTestId('name-input').locator('[data-testid="input-field"]');
      const emailInput = page.getByTestId('email-input').locator('[data-testid="input-field"]');
      
      // Fill in the inputs
      await nameInput.fill('John Doe');
      await emailInput.fill('john@example.com');
      
      // User info should be displayed
      const userInfo = page.getByTestId('user-info');
      await expect(userInfo).toBeVisible();
      await expect(userInfo).toContainText('Name: John Doe');
      await expect(userInfo).toContainText('Email: john@example.com');
    });
  });

  test.describe('DataTable Component', () => {
    test('should render data table with headers', async ({ page }) => {
      const table = page.getByTestId('data-table');
      await expect(table).toBeVisible();
      
      // Check headers
      await expect(table.locator('thead')).toContainText('ID');
      await expect(table.locator('thead')).toContainText('Name');
      await expect(table.locator('thead')).toContainText('Email');
      await expect(table.locator('thead')).toContainText('Role');
    });

    test('should display table data', async ({ page }) => {
      const table = page.getByTestId('data-table');
      
      // Check that we have data rows
      const rows = table.locator('tbody tr');
      const rowCount = await rows.count();
      expect(rowCount).toBeGreaterThan(0);
      
      // Check first row data
      const firstRow = page.getByTestId('table-row-0');
      await expect(firstRow).toContainText('John Doe');
      await expect(firstRow).toContainText('john@example.com');
      await expect(firstRow).toContainText('Developer');
    });

    test('should filter table data based on search query', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      
      // Search for "Designer"
      await searchInput.fill('Designer');
      
      // Wait for filtering to happen
      await page.waitForTimeout(100);
      
      // Check that table shows filtered results
      const table = page.getByTestId('data-table');
      await expect(table.locator('tbody')).toContainText('Jane Smith');
      await expect(table.locator('tbody')).toContainText('Designer');
      
      // Other roles should not be visible
      await expect(table.locator('tbody')).not.toContainText('Developer');
    });

    test('should show all data when search is cleared', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      const clearButton = page.getByTestId('clear-button');
      
      // Search for something
      await searchInput.fill('Manager');
      await page.waitForTimeout(100);
      
      // Clear search
      await clearButton.click();
      
      // All rows should be visible again
      const table = page.getByTestId('data-table');
      const rows = table.locator('tbody tr');
      const rowCount = await rows.count();
      expect(rowCount).toBe(5); // All 5 rows should be visible
    });
  });

  test.describe('Integration', () => {
    test('should work together - search filters table', async ({ page }) => {
      const searchInput = page.getByTestId('search-input');
      const table = page.getByTestId('data-table');
      
      // Search for a specific person
      await searchInput.fill('Alice');
      await page.waitForTimeout(100);
      
      // Table should only show Alice
      await expect(table.locator('tbody')).toContainText('Alice Williams');
      
      const visibleRows = table.locator('tbody tr');
      const rowCount = await visibleRows.count();
      expect(rowCount).toBe(1);
    });
  });
});

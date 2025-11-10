# Quick Start Guide

## What's Been Created

This repository now contains a complete Vue 3 test project with Playwright tests.

### Components Created:
1. **SearchBox.vue** - Search input with clear button and real-time display
2. **InputField.vue** - Reusable input field with label support
3. **DataTable.vue** - Data table with search filtering capability

### Test Coverage:
- SearchBox: Input, clear button, search result display
- InputField: Multiple inputs, user info display
- DataTable: Rendering, data display, filtering
- Integration: Search filtering the table

## Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install chromium
```

### 3. Start the Development Server
```bash
npm run dev
```
The app will be available at http://localhost:5173

### 4. Run Playwright Tests
In a separate terminal (or the dev server will auto-start):
```bash
npm test
```

### Other Commands:
- `npm run test:ui` - Run tests in UI mode (interactive)
- `npm run test:headed` - Run tests with visible browser
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## What to Expect

When you run the app, you'll see:
- A header with the project title
- A search box that filters the table
- Two input fields (Name and Email) that display user info when filled
- A data table with 5 sample records that can be filtered by the search box

The Playwright tests validate all of these interactions automatically.

## File Structure
```
├── src/
│   ├── components/
│   │   ├── SearchBox.vue
│   │   ├── InputField.vue
│   │   └── DataTable.vue
│   ├── App.vue
│   └── main.js
├── tests/
│   └── app.spec.js
├── index.html
├── vite.config.js
├── playwright.config.js
└── package.json
```

## Verified
✅ Vue 3 project builds successfully
✅ Development server starts correctly
✅ All components are in place
✅ Test file is configured
✅ README has complete instructions

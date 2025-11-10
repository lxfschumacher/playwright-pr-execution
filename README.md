# playwright-pr-execution

Demo repository to show how e2e tests can be executed on PR creation.

This project includes a simple Vue 3 application with three components (SearchBox, InputField, and DataTable) and Playwright tests to validate their functionality.

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── SearchBox.vue      # Search input component
│   │   ├── InputField.vue     # Reusable input field component
│   │   └── DataTable.vue      # Table component with filtering
│   ├── App.vue                # Main application component
│   └── main.js                # Application entry point
├── tests/
│   └── app.spec.js            # Playwright E2E tests
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── playwright.config.js       # Playwright configuration
└── package.json               # Project dependencies
```

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lxfschumacher/playwright-pr-execution.git
   cd playwright-pr-execution
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Other available commands:

- **Build for production:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

## Running Playwright Tests

The tests will automatically start the dev server if it's not already running.

### Run all tests:
```bash
npm test
```

### Run tests in UI mode (interactive):
```bash
npm run test:ui
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

## Components

### SearchBox
A search input component with a clear button. It filters the data table in real-time.

**Features:**
- Real-time search input
- Clear button to reset search
- Displays current search query

### InputField
A reusable input field component with label and placeholder support.

**Props:**
- `label`: Optional label for the input
- `placeholder`: Placeholder text
- `type`: Input type (default: 'text')
- `modelValue`: v-model binding

### DataTable
A table component that displays data with filtering capabilities.

**Props:**
- `columns`: Array of column definitions (key and label)
- `data`: Array of data objects to display
- `searchQuery`: Filter data based on search query

**Features:**
- Responsive table layout
- Search filtering across all columns
- Hover effects
- Empty state handling

## Test Coverage

The Playwright tests cover:
- ✅ SearchBox functionality (input, clear, display)
- ✅ InputField functionality (multiple inputs, user info display)
- ✅ DataTable functionality (rendering, data display, filtering)
- ✅ Integration tests (search filtering the table)

## Development

The project uses:
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Playwright** - End-to-end testing framework

## CI/CD

This repository is configured to run Playwright tests on pull request creation. The tests ensure that all components work correctly before merging changes.


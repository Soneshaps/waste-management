# Rem-Waste: Smart Waste Management Solution

A modern web application for efficient waste management and skip hire services. This platform helps users find and book appropriate skip sizes for their waste disposal needs.

## 🎥 Demo

### Sandbox URL

Sandbox URL for the application: [Rem-Waste Sandbox URL](https://codesandbox.io/p/github/Soneshaps/waste-management/main)

### Desktop View

[[Watch Demo Video for Webpage]](https://vimeo.com/1092041247)
_Clean and intuitive interface for desktop users_

### Mobile View

[[Watch Demo Video for Mobile]](https://vimeo.com/1092041271)
_Responsive design optimized for mobile devices_

### Key Features Showcase

#### 1. Skip Selection

![Skip Selection](https://i.imgur.com/cSNNDKs.png)
_Interactive skip size selection with detailed information_

#### 2. Skip Details

![Skip Details](https://i.imgur.com/2NMoJ5o.png)
_Skip detail Sectio_

#### 3. Responsive Design

![Responsive Design](https://i.imgur.com/tcPMc6l.png)
![Responsive Design](https://i.imgur.com/Me8Bguq.png)
_Seamless experience across all devices_

## ✨ Features

- **Smart Skip Selection**: Choose the perfect skip size based on your waste disposal needs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User-Friendly Interface**: Clean and modern UI for better user experience
- **Guided Booking Process**:
  - Interactive stepper interface for both desktop and mobile
  - Clear progress indication through booking steps
  - Responsive stepper design adapts to screen size
- **Data Persistence**:
  - Form data persists across component navigation
  - Seamless user experience with no data loss
  - State management across the entire booking flow
- **Validation & Flow Control**:
  - Skip size selection required before proceeding
  - Guided user journey prevents incomplete submissions

## 🎨 Design Approach

### Inspiration & UI/UX Decisions

- **Stepper Design**: Inspired by [Dribbble Stepper Components](https://dribbble.com/shots/14012793-Stepper-Components)

  - Clean and intuitive step navigation
  - Visual progress indication
  - Seamless transitions between steps

- **Skip Selection UI**: Inspired by [Nike Sneakers Product Card](https://dribbble.com/shots/26028875-Nike-Sneakers-Product-Card-Dark-Light-UI)
  - Improved user focus on selected skip

### UX Improvements

- **Streamlined Skip Selection**:

  - Replaced overwhelming list view with focused card-based display
  - Clear presentation of skip information after selection
  - Reduced cognitive load for users

- **Enhanced Mobile Experience**:

  - Smooth scroll transitions to skip details
  - Optimized layout for mobile devices
  - Intuitive navigation between steps

- **Progressive Disclosure**:
  - Step-by-step information presentation
  - Clear validation feedback
  - Guided user journey with enabled/disabled states

## 🛠️ Technology Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Type Safety**: TypeScript
- **Code Quality**: ESLint
- **Development Tools**:
  - Fast Refresh for quick development
  - Path aliases for clean imports
  - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rem-waste.git
   cd rem-waste
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🧪 Testing

### Test Setup

This project uses Vitest for testing, which provides a fast and modern testing experience. The test configuration includes:

- **Test Environment**: JSDOM for browser environment simulation
- **Coverage Provider**: V8 for accurate code coverage reporting
- **Test Location**: Tests are located in `src/__tests__` directory
- **File Pattern**: `*.test.ts` or `*.spec.ts` files

### Running Tests

1. **Run tests in watch mode**:

   ```bash
   npm test
   ```

   This will start Vitest in watch mode, automatically re-running tests when files change.

2. **Run tests with coverage**:

   ```bash
   npm run test:coverage
   ```

   This will generate a coverage report showing:

   - Statement coverage
   - Branch coverage
   - Function coverage
   - Line coverage

3. **Run specific test file**:
   ```bash
   npm test src/__tests__/utils.test.ts
   ```

### Test Structure

Tests are organized in the `src/__tests__` directory with the following structure:

```
src/
  __tests__/
    utils.test.ts      # Utility function tests
```

### Writing Tests

Example of a test file structure:

```typescript
import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../utils';

describe('formatCurrency', () => {
  it('should format a number with pound symbol', () => {
    expect(formatCurrency(100)).toBe('£100');
  });

  it('should handle undefined values', () => {
    expect(formatCurrency(undefined)).toBe('£0');
  });
});
```

### Test Coverage

The project maintains a high test coverage with:

- Unit tests for utility functions
- Component tests for UI elements
- Integration tests for key features
- Coverage reports in HTML, JSON, and text formats

## 📧 Contact

[sonesh.aps@gmail.com]

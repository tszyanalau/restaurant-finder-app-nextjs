# Restaurant Finder App

The **Restaurant Finder App** helps users discover restaurants near a specific coordinate (currently preset as **The Sumitomo Fudosan Roppongi Grand Tower** in the code), view detailed information about each restaurant, and display the selected restaurant on a map. The app integrates with the [Google Places API (New)](https://developers.google.com/maps/documentation/places/web-service/op-overview) to fetch restaurant data and uses the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) for map rendering and location visualization.

This is a hobby project for exploring [**Next.js**](https://nextjs.org/) and related technologies, not intended for commercial use.

## Key Features

- **Find Restaurants**: Search for restaurants within a user-defined radius of a specific coordinate.
- **Interactive Map**: View the locations of restaurants and the target coordinate on an embedded Google Map.
- **Restaurant Details**: Access information such as address and phone number on a dedicated page.

## Prerequisites

Before running the application, ensure you have the following:

- **Node.js** (>=v20.15) installed on your machine.
- **Google API Key** with the following services enabled at [Google Cloud Console](https://console.cloud.google.com/):
  - **Maps JavaScript API**
  - **Places API (New)**

## Getting Started

### Clone the repository

```sh
git clone https://github.com/tszyanalau/restaurant-finder-app-nextjs.git
cd restaurant-finder-app-nextjs
```

### Install dependencies

```sh
npm install
```

### Add environment variables

Create a `.env.local` file and add the following:

```env
APP_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
```

## Development Tools

### 1. **Vitest**

- A modern testing framework for unit testing React components and utilities.
- Provides fast and reliable test execution with minimal configuration.

### 2. **ESLint and Prettier**

- **ESLint**: Enforces consistent code quality by detecting and fixing potential issues.
- **Prettier**: Automatically formats code to maintain uniform styling across the project.

### 3. **Commitlint and lint-staged**

- **Commitlint**: Ensures commit messages follow a standard format for better version control and collaboration.
- **lint-staged**: Runs pre-commit checks on staged files, ensuring only properly formatted code is committed.

## Available Scripts

The following scripts are available for development, testing, and building the project:

- **`npm run build`**: Builds the app for production using Vite.
- **`npm run lint`**: Checks code quality using ESLint.
- **`npm run prettier:fix`**: Formats code and assets using Prettier.
- **`npm run test`**: Runs unit tests using Vitest.
- **`npm run test:watch`**: Watches for changes and re-runs tests.
- **`npm run test:ui`**: Launches the Vitest UI for interactive test exploration.

## Technologies Used

### 1. **Next.js**

- A powerful React framework that enables server-side rendering, static site generation, and API routes.

### 2. **Google Places API (New)**

- Provides restaurant search functionality, including location-based queries and detailed restaurant information.

### 3. **Google Maps API**

- Enables interactive map rendering and geolocation services for visualizing restaurant locations.

### 4. **Tailwind CSS with DaisyUI**

- **Tailwind CSS**: A utility-first CSS framework that provides rapid styling capabilities.
- **DaisyUI**: A Tailwind plugin that adds pre-designed UI components for a consistent and polished design.

### 5. **Vitest**

- A fast and lightweight testing framework designed for modern JavaScript and TypeScript projects.

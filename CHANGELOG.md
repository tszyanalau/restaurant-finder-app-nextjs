# restaurant-finder-app-nextjs

## 1.0.2

### Patch Changes

- 8cb9384: Refactor Icon Usage and Simplify Components

  This changeset includes several updates to improve the consistency and simplicity of icon usage across the application:

  1. **Ensure Default Flags for Restaurant Services**: Fixed an issue to ensure flags for restaurant services default to `false`.
  2. **Add Bootstrap Icons Package**: Added the `bootstrap-icons` package and imported it in the layout.
  3. **Remove @heroicons/react Dependency**: Removed the `@heroicons/react` dependency in favor of using Bootstrap icons.
  4. **Update Icon Component**: Refactored the `Icon` component to use Bootstrap icons and simplified the props.
  5. **Update Rating Component**: Refactored the `Rating` component to use Bootstrap icons, removed the `variant` prop, and improved the star rendering logic with half-filled stars.
  6. **Update Affected Components**: Refactored the `Flag`, `ExternalLink`, and `Alert` components to use Bootstrap icons.

## 1.0.1

### Patch Changes

- 5996e92: Refactor Restaurant Details Page

  Refactored the restaurant detail page to improve code reusability. The following changes have been made:

  1. **Extracted Table Component**: Created a reusable `Table` component to display restaurant details in a tabular format.
  2. **Dynamic Data Handling**: Updated the `Table` component to handle dynamic data keys.
  3. **Test Cases**: Added test cases for the `Table` component to ensure it renders correctly with provided data.

  Ref: [PR #4](https://github.com/tszyanalau/restaurant-finder-app-nextjs/pull/4)

- e30af79: Refactor Restaurant Details Page

  Refactored the restaurant detail page to improve code organization and maintainability. The following changes have been made:

  1. **Extracted OpeningHours Component**: Added the `OpeningHours` component to display restaurant operating hours.
  2. **Enhanced Table Component**: Enhanced the `Table` component to accept an additional `className` prop for better styling flexibility.
  3. **Used currentOpeningHours**: Used `regularOpeningHours` instead of `currentOpeningHours` in the API.
  4. **Moved DEFAULT_PLACEHOLDER**: Moved the `DEFAULT_PLACEHOLDER` constant to a dedicated constants file.
  5. **Changed Table Component Export**: Changed the `Table` component to a default export for consistency with other components.

- 5996e92: Mobile Screen Support for Restaurant Details Page

  Add responsive class names to restaurant details page for better mobile screen support.

  Ref: [PR #3](https://github.com/tszyanalau/restaurant-finder-app-nextjs/pull/3)

## 1.0.0

### Major Changes

- 1ec279f: Initial Release

  - Added several dev tools: eslint, prettier, commitlint
  - Added home page and restaurant details page
  - Added error handling pages
  - Added unit tests for components and utils using vitest
  - Added changeset tools
  - Updated README

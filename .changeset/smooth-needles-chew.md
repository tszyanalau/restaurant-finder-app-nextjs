---
'restaurant-finder-app-nextjs': patch
---

# Refactor Restaurant Details Page

Refactored the restaurant detail page to improve code organization and maintainability. The following changes have been made:

1. **Extracted OpeningHours Component**: Added the `OpeningHours` component to display restaurant operating hours.
2. **Enhanced Table Component**: Enhanced the `Table` component to accept an additional `className` prop for better styling flexibility.
3. **Used currentOpeningHours**: Used `regularOpeningHours` instead of `currentOpeningHours` in the API.
4. **Moved DEFAULT_PLACEHOLDER**: Moved the `DEFAULT_PLACEHOLDER` constant to a dedicated constants file.
5. **Changed Table Component Export**: Changed the `Table` component to a default export for consistency with other components.

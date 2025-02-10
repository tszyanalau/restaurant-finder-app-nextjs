---
'restaurant-finder-app-nextjs': patch
---

# Refactor Icon Usage and Simplify Components

This changeset includes several updates to improve the consistency and simplicity of icon usage across the application:

1. **Ensure Default Flags for Restaurant Services**: Fixed an issue to ensure flags for restaurant services default to `false`.
2. **Add Bootstrap Icons Package**: Added the `bootstrap-icons` package and imported it in the layout.
3. **Remove @heroicons/react Dependency**: Removed the `@heroicons/react` dependency in favor of using Bootstrap icons.
4. **Update Icon Component**: Refactored the `Icon` component to use Bootstrap icons and simplified the props.
5. **Update Rating Component**: Refactored the `Rating` component to use Bootstrap icons, removed the `variant` prop, and improved the star rendering logic with half-filled stars.
6. **Update Affected Components**: Refactored the `Flag`, `ExternalLink`, and `Alert` components to use Bootstrap icons.

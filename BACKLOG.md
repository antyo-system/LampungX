# Backlog

## Done
- Project scaffolded with Tailwind CSS tooling and npm configuration for the cultural exploration site.
- Core static pages created in `public/` (Home, Explore, Stories, Itinerary, Resources) with navigation and hero treatments.
- Reusable UI helper functions drafted for navigation and place cards in `src/components/ui.js` to standardize layout patterns.

## In Progress
- Consolidating repeated navigation and card markup into shared components; `src/components/ui.js` is ready but needs to be wired into the public pages.
- Refining Explore page filtering and card presentation using the existing style hooks and hover interactions defined in `public/explore.html`.

## To Do
- Wire the Tailwind build pipeline to produce `public/css/styles.css` from `src/css/input.css` and keep styles consistent across pages.
- Add mobile menu toggling and active link states so navigation behaves well on smaller screens.
- Populate dynamic content for Explore, Stories, and Itinerary sections and connect the data to the UI helpers.
- Publish the live demo referenced in the README once the content and interactions stabilize.

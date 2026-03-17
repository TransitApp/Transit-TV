# Frequently Asked Questions

## Is Transit TV stop-based or location-based?

Transit TV displays routes within a **1000-meter radius of a configured latitude/longitude coordinate**. It does not use stop IDs.

This is different from traditional real-time signs that display information for a specific stop or small group of stops. Instead, Transit TV queries the Transit API's `nearby_routes` endpoint with a location and radius, returning all routes with upcoming departures in that area. The closest stop for each route direction is shown alongside departure times. You can also hide specific routes and reorder them through the on-screen configuration UI.

## How do I configure the location?

The location is set directly in the browser interface as a `latitude, longitude` pair (e.g. `45.5017, -73.5673`). It is stored in a browser cookie, so each screen can have its own location. 

## What data is shown on screen?

For each route near the configured location, Transit TV displays:
- The route name/number with its official color badge
- The closest stop name for each direction
- The next upcoming departure times (up to 4 per direction)
- A **RT** indicator when the departure time is based on real-time data rather than the schedule

Only departures within the next ~2 hours are shown. Routes with no upcoming departures are automatically hidden.

## How often does the data refresh?

The screen polls for new data every **20 seconds**.

## Do I need a paid API key?

Yes, for 24/7 operation. The free Transit API tier has rate limits that won't sustain continuous polling. Request access on the [Transit API page](https://transitapp.com/apis).

## Can I change the search radius?

Not through the UI. The radius is currently hardcoded at 1000 meters. However, you can hide unwanted routes through the on-screen configuration UI to narrow down what's displayed.

## Can I hide or reorder routes?

Yes. The on-screen configuration UI lets you hide specific routes and reorder them. These preferences are saved in browser cookies.

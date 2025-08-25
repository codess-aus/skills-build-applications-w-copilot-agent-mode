// Workouts.js
// OctoFit Tracker - Workouts Component
// Uses Codespace Django REST API endpoint

const WORKOUTS_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/workouts';

export default function Workouts() {
  // Example fetch usage
  // fetch(WORKOUTS_API)
  return (
    <div>
      <h2>Workouts</h2>
      <p>API Endpoint: {WORKOUTS_API}</p>
    </div>
  );
}

// Workouts.js
// OctoFit Tracker - Workouts Component
// Uses Codespace Django REST API endpoint

const WORKOUTS_API = 'https://USERNAME-8000.app.github.dev/api/workouts';

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

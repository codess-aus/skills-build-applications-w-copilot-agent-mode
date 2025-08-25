// Leaderboard.js
// OctoFit Tracker - Leaderboard Component
// Uses Codespace Django REST API endpoint

const LEADERBOARD_API = 'https://USERNAME-8000.app.github.dev/api/leaderboard';

export default function Leaderboard() {
  // Example fetch usage
  // fetch(LEADERBOARD_API)
  return (
    <div>
      <h2>Leaderboard</h2>
      <p>API Endpoint: {LEADERBOARD_API}</p>
    </div>
  );
}

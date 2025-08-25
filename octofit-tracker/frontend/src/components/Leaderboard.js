
import React from 'react';
const LEADERBOARD_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/leaderboard';

export default function Leaderboard() {
  return (
    <div>
      <h2 className="mb-4">Leaderboard</h2>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jane Doe</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>2</td>
                <td>John Smith</td>
                <td>1100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <a href={LEADERBOARD_API} className="btn btn-link">API Endpoint</a>
    </div>
  );
}

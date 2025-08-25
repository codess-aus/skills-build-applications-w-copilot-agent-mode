
import React from 'react';
const TEAMS_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/teams';

export default function Teams() {
  return (
    <div>
      <h2 className="mb-4">Teams</h2>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Members</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OctoFit Runners</td>
                <td>5</td>
                <td><button className="btn btn-outline-primary btn-sm">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Create Team</label>
          <input type="text" className="form-control" placeholder="Team Name" />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>
      <a href={TEAMS_API} className="btn btn-link mt-3">API Endpoint</a>
    </div>
  );
}

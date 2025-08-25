
import React from 'react';
const USERS_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/users';

export default function Users() {
  return (
    <div>
      <h2 className="mb-4">Users</h2>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td>jane@example.com</td>
                <td><button className="btn btn-warning btn-sm">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Add User</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <button type="submit" className="btn btn-success">Add</button>
      </form>
      <a href={USERS_API} className="btn btn-link mt-3">API Endpoint</a>
    </div>
  );
}

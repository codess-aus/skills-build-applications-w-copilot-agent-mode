
import React, { useState } from 'react';
const WORKOUTS_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/workouts';

export default function Workouts() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h2 className="mb-4">Workouts</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>Add Workout</button>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning Run</td>
                <td>Run</td>
                <td>30 min</td>
                <td><button className="btn btn-info btn-sm">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal Example */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Workout</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select className="form-select">
                      <option>Run</option>
                      <option>Swim</option>
                      <option>Bike</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input type="text" className="form-control" placeholder="e.g. 30 min" />
                  </div>
                  <button type="submit" className="btn btn-success">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <a href={WORKOUTS_API} className="btn btn-link mt-3">API Endpoint</a>
    </div>
  );
}

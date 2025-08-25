
import React, { useState } from 'react';

const ACTIVITIES_API = 'https://studious-xylophone-rxr9pgx7742xqv6.github.dev-8000.app.github.dev/api/activities';

export default function Activities() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h2 className="mb-4">Activities</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>Add Activity</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Activity</td>
            <td>2025-08-25</td>
            <td>Run</td>
            <td><button className="btn btn-info btn-sm">View</button></td>
          </tr>
        </tbody>
      </table>
      {/* Modal Example */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Activity</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select className="form-select">
                      <option>Run</option>
                      <option>Swim</option>
                      <option>Bike</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-3">
        <a href={ACTIVITIES_API} className="btn btn-link">API Endpoint</a>
      </div>
    </div>
  );
}

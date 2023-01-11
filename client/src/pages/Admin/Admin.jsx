import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './_Admin.scss';

export default function Admin() {
  return (
    <div className="container admin">
      <div className="admin-wrapper">
        <div className="admin-nav">
          <Link to="settings" className="admin-nav-link">
            Settings
          </Link>
          <Link to="manageTours" className="admin-nav-link">
            Manage Tours
          </Link>
        </div>
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  const [activeLink, setActiveLink] = useState("dashboard");

  // Set state for active link for the route the user is currently one
  const handleActiveLink = ({ target }) => {
    setActiveLink(target.id);
  };

  return (
    <nav className="navbar navbar-dark align-items-start p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          to="/"
        >
          <div className="sidebar-brand-text mx-3">
            <span>Periodic Tables</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <ul className="nav navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item col-12 slide-out">
            <Link
              className={
                activeLink === "dashboard" ? "nav-link active" : "nav-link"
              }
              to="/dashboard"
              onClick={handleActiveLink}
              id="dashboard"
            >
              <span className="oi oi-dashboard" />
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="nav-item col-12 slide-out">
            <Link
              className={
                activeLink === "search" ? "nav-link active" : "nav-link"
              }
              to="/search"
              onClick={handleActiveLink}
              id="search"
            >
              <span className="oi oi-magnifying-glass" />
              &nbsp;Search
            </Link>
          </li>
          <li className="nav-item col-12 slide-out">
            <Link
              className={
                activeLink === "reservations/new"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/reservations/new"
              onClick={handleActiveLink}
              id="reservations/new"
            >
              <span className="oi oi-plus" />
              &nbsp;New Reservation
            </Link>
          </li>
          <li className="nav-item col-12 slide-out">
            <Link
              className={
                activeLink === "tables/new" ? "nav-link active" : "nav-link"
              }
              to="/tables/new"
              onClick={handleActiveLink}
              id="tables/new"
            >
              <span className="oi oi-layers" />
              &nbsp;New Table
            </Link>
          </li>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          />
        </div>
      </div>
    </nav>
  );
}

export default Menu;

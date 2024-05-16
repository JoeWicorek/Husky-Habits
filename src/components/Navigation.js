import React from 'react';

export function NavBar(props) {
    return (
        <nav className="navigation-bar">
            <ul>
                <li>
                    <a href="index.html">
                        <img src="img/feed-icon.png" alt="Dashboard" />
                        <span className="nav-label">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="create-task.html">
                        <img src="img/add-icon.png" alt="Add Habit" />
                        <span className="nav-label">Add Habit</span>
                    </a>
                </li>
                <li>
                    <a href="profile.html">
                        <img src="img/profile-icon.png" alt="Profile" />
                        <span className="nav-label">Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

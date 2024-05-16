import React from 'react';
import './css/feed.css'; 

function FeedScreen() {
    return (
        <div>
            <header>
                <h1 className="app-title">HuskyHabits</h1>
            </header>

            <nav className="top-dock">
                <a href="index.html" className="nav-link left"></a>
                <h1 className="nav-title">Your Friends Habits</h1>
                <a href="index.html" className="nav-link right"></a>
            </nav>

            <main>
                <div className="feed-screen">
                    <div className="habit-card">
                        <div className="habit-info">
                            <div className="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                        </div>
                        <div className="habit-status">
                            <span className="status-icon">&#10003;</span>
                        </div>
                    </div>

                    <div className="habit-card">
                        <div className="habit-info">
                            <div className="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                        </div>
                        <div className="habit-status">
                            <span className="status-icon">&#10003;</span>
                        </div>
                    </div>
                </div>
            </main>

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

            <footer>
                <p>&copy; 2024 Husky Habits. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default FeedScreen;

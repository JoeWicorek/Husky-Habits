import React from 'react';
import './css/profile.css'; 

function UserProfile() {
    return (
        <div>
            <header>
                <h1 className="app-title">HuskyHabits</h1>
            </header>

            <nav className="top-dock" style={{ justifyContent: 'center' }}>
                <h1 className="nav-title">Your Profile</h1>
            </nav>
            
            <main>
                <div className="top-half">
                    <div className="profile-dock">
                        <div className="content">
                            {/* Add content here */}
                        </div>
                        <h1 className="app-title">@username</h1>

                        <div className="profile-picture">
                            <div className="image">
                                <img src="img/profile.jpeg" alt="Profile Picture" />
                            </div>
                            <div className="upload-image">
                                <input type="file" id="pfp" name="pfp" accept="image/png, image/jpeg" style={{ display: 'none' }} />
                                <label htmlFor="pfp" id="change-image">Change Image</label>
                            </div>
                        </div>

                        <div className="friends-tasks">
                            <div className="friends">
                                <p>8</p>
                                <button>friends</button>
                            </div>
                            <div className="tasks">
                                <p>20</p>
                                <button>tasks</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="update-settings">
                        <form>
                            <div className="password-details">
                                {/* Password change form */}
                            </div>
            
                            <div className="bio-details">
                                {/* Bio update form */}
                            </div>
                    
                            <button type="submit" id="submit">Save Changes</button>
                        </form>
                    </div>
                </div>

                <div className="bottom-half">
                    <div className="view-buttons">
                        <div className="add-manage-friends">
                            <a href="add-friend.html" className="button">Add/Manage Friends</a>
                        </div>
                    
                        <div className="view-tasks">
                            <button>View All Tasks</button>
                        </div>
                    </div>

                    <div className="delete-account">
                        <button>Delete Account</button>
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

export default UserProfile;

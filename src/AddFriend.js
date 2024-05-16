import React from 'react';
import './css/add-friend.css'; // Assuming this is the path to your CSS file
import addFriendIcon from './img/addfriend.png'; // Assuming this is the path to your addfriend.png file
import person1Icon from './img/person1.png'; // Assuming this is the path to your person1.png file

function AddFriendScreen() {
    return (
        <div>
            <header>
                <h1 className="app-title">HuskyHabits</h1>
            </header>

            <nav className="top-dock">
                <a href="profile.html" className="nav-link left">Cancel</a>
                <h1 className="nav-title">Add Friend</h1>
                <a href="profile.html" className="nav-link right"> Done </a>
            </nav>

            <main>
                <section className="task-section">
                    <div className="image-upload-container">
                        <div className="circle-image">
                            <img src={addFriendIcon} alt="Add Friend Icon" />
                        </div>
                    </div>
                    <div className="search-form">
                        <input type="text" placeholder="Jackson" name="search" />
                        <button className="addfriend-button" type="submit"><i className="fa fa-search"></i> Search</button>
                    </div>
                </section>

                <div className="search-results">
                    <div className="item">
                        <img src={person1Icon} alt="Person 1" className="profile-img" />
                        <div className="info">
                            <h3>Jackson McCoy</h3>
                            <p>jackson.mccoy@example.com</p>
                        </div>
                        <button className="addfriend-button">Add</button>
                    </div>
                    {/* Add other items here */}
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
                    {/* Add other navigation items here */}
                </ul>
            </nav>
            
            <footer>
                <p>&copy; 2024 Husky Habits. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default AddFriendScreen;

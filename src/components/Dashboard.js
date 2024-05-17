import React from "react";
import Header from "./Header";

export default function Dashboard(props) {
    return (
        <div>
            <Header />

            <section class="top-dock thick">
                <div>
                    <div class="top-dock-vertical-container">
                        <div>
                            <img src="img/streak-logo.png" alt="Streak Flame Logo" />
                            <div class="streak-number-label">
                                <strong>26</strong>
                            </div>
                        </div>
                        <h2>Your Overall Streak</h2>
                    </div>
                </div>
            </section>

            <main>
                <section class="habit-board">
                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>
                        </div>
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>

                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>
                    <div class="habit-card mutual-challenge">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>

                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>
                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>

                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>
                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>

                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>
                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/lifting.jpeg" alt="weight lifting" />
                            </div>
                            <p>go to the gym w/ @username by 10am</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>

                    <div class="habit-card">
                        <div class="habit-info">
                            <div class="habit-avatar">
                                <img src="img/coding.jpeg" alt="coding" />
                            </div>
                            <p>leetcode practice w/ @username by 6pm</p>
                            <div class="habit-status">
                                <button class="btn btn-primary">Complete Habit</button>
                            </div>  
                        </div>
                        
                        <div class="edit-button">
                            <a href="edit-task.html"><img src="img/edit-icon.png" alt="Add Habit" /></a>
                        </div>
                    </div>
                </section>
            </main>
            
            <nav class="navigation-bar">
                <ul>
                    <li>
                        <a href="index.html">
                            <img src="img/feed-icon.png" alt="Dashboard" />
                            <span class="nav-label">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="create-task.html">
                            <img src="img/add-icon.png" alt="Add Habit" />
                            <span class="nav-label">Add Habit</span>
                        </a>
                    </li>
                    <li>
                        <a href="profile.html">
                            <img src="img/profile-icon.png" alt="Profile" />
                            <span class="nav-label">Profile</span>
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
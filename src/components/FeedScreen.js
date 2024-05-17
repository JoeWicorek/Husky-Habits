import React from 'react';
import { TopDock } from './TopDock';
import { NavBar } from './Navigation';
import { Footer } from './Footer';

export function FeedScreen(props) {
    return (
        <div>
            <TopDock dockTitleName = {"Your Friends Habits"} />
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
            <NavBar />
            <Footer />
        </div>
    );
}

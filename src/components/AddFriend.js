import React from 'react';
import { TopDock } from './TopDock';
import { Header } from './Header';
import { NavBar } from './Navigation';
import { Footer } from './Footer';

export function AddFriendScreen() {
    return (
        <div>
            <Header />
            <TopDock dockTitleName = {"Add Friends"} />

            <main>
                <section className="task-section">
                    <div className="image-upload-container">
                        <div className="circle-image">
                            <img src="img/addfriend.png" alt="Add Friend Icon" />
                        </div>
                    </div>
                    <div className="search-form">
                        <input type="text" placeholder="Jackson" name="search" />
                        <button className="addfriend-button" type="submit"><i className="fa fa-search"></i> Search</button>
                    </div>
                </section>

                <div className="search-results">
                    <div className="item">
                        <img src="img/person1.png" alt="Person 1" className="profile-img" />
                        <div className="info">
                            <h3>Jackson McCoy</h3>
                            <p>jackson.mccoy@example.com</p>
                        </div>
                        <button className="addfriend-button">Add</button>
                    </div>
                    {/* Add other items here */}
                </div>
            </main>
            <NavBar />
            <Footer />
        </div>
    );
}

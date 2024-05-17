import React from 'react';
import TopDock from './TopDock';

export function UserProfile(props) {
    return (
        <div>
            <TopDock dockTitleName = {"Create Task"}/>
            <TaskSubmitForm />
        </div>
    );
}


function ProfileInfo() {
    return (
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
    );
}

function UpdateSettings() {
    return (
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
    );
}

function ProfileActions() {
    return (
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
    );
}

function UserProfile() {
    return (
        <div>
            <ProfileHeader />
            <main>
                <div className="top-half">
                    <ProfileInfo />
                    <UpdateSettings />
                </div>
                <ProfileActions />
            </main>
        </div>
    );
}

export default UserProfile;

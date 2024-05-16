import React from 'react';
import { HeaderTitle } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { NavBar } from './components/Navigation.js';
import { EditTaskScreen } from './components/EditTask.js'
import { CreateTaskScreen } from './components/CreateTask.js';
import { FeedScreen } from './components/FeedScreen.js';
import UserProfile from './components/UserProfile.js';
import { AddFriendScreen } from './components/AddFriend.js';

import './index.css';


function App(props) {
  return (
    <div className="App">
      <HeaderTitle />
      {/* <EditTaskScreen /> */}
      {/* <CreateTaskScreen /> */}
      {/* <FeedScreen /> */}
      {/* <UserProfile /> */}
      <AddFriendScreen />
      <NavBar />
      <Footer />
      {/* Other components and content */}
    </div>
  );
}

export default App;


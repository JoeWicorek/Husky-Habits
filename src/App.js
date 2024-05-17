import React from 'react';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { NavBar } from './components/Navigation.js';
import { EditTaskScreen } from './components/EditTask.js'
import { CreateTaskScreen } from './components/CreateTask.js';
import { FeedScreen } from './components/FeedScreen.js';
import UserProfile from './components/UserProfile.js';
import { AddFriendScreen } from './components/AddFriend.js';
import Dashboard from './components/Dashboard.js';

import './index.css';


function App(props) {
  return (
    <div className="App">
      {/* <HeaderTitle /> */}



      <Dashboard />
      {/* <FeedScreen /> */} 
      {/* <EditTaskScreen /> */}
      {/* <CreateTaskScreen /> */}
      {/* <UserProfile /> */}
      {/* <AddFriendScreen /> */}



      {/* <NavBar />
      <Footer /> */}
    </div>
  );
}

export default App;


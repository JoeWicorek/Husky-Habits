import React from 'react';
import { TopDock } from './TopDock';
import { TaskSubmitForm } from './TaskSubmitForm';
import { Header } from './Header';
import { Footer } from './Footer';

export function CreateTaskScreen(props) {
    return (
        <div>
            <Header />
            <TopDock dockTitleName = {"Create Task"}/>
            <TaskSubmitForm username = {""}/>
            <Footer />
        </div>
    );
}

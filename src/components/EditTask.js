import React from 'react';
import { TopDock } from './TopDock';
import { TaskSubmitForm } from './TaskSubmitForm';
import { HeaderTitle } from './Header';
import { Footer } from './Footer';

export function EditTaskScreen(props) {
    return (
        <div>
            <Header />
            <TopDock dockTitleName = {"Edit Task"}/>
            <TaskSubmitForm uploadImage = {"Change Image"} />
            <Footer />
        </div>
    );
}

import React from 'react';
import { TopDock } from './TopDock';
import { TaskSubmitForm } from './TaskSubmitForm';

export function CreateTaskScreen(props) {
    return (
        <div>
            <TopDock dockTitleName = {"Create Task"}/>
            <main>
                <TaskSubmitForm />
            </main>
        </div>
    );
}

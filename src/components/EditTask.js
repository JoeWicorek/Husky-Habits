import React from 'react';
import { TopDock } from './TopDock';

export function EditTaskScreen(props) {
    return (
        <div>
            <TopDock dockTitleName = {"Edit Task"}/>
            
            <section className="task-section">
                <div className="image-upload-container">
                    <div className="circle-image">
                        <img src="img/circle.png" alt="Circle" />
                    </div>
                    <a href="#" className="image-link">Change Image</a>
                </div>
                <div className="task-name-display">
                    <p>Edit task name</p>
                </div>
            </section>

            <section className="task-details">
                <div className="select-day">
                    <img src="img/sun.png" alt="Sunday" />
                    <img src="img/mon.png" alt="Monday" />
                    <img src="img/tue.png" alt="Tuesday" />
                    <img src="img/wed.png" alt="Wednesday" />
                    <img src="img/thur.png" alt="Thursday" />
                    <img src="img/fri.png" alt="Friday" />
                    <img src="img/sat.png" alt="Saturday" />
                </div>

                <div className="select-time">
                    <div className="time-title">
                        <p>Time:</p>
                    </div>
                    <div className="time-type">
                        <div className="at">
                            <p>At</p>
                        </div>
                        <div className="before">
                            <p>Before</p>
                        </div>
                    </div>
                    <div className="time-box">
                        <div className="time-highlight">
                            <p>12</p>
                            <p>00</p>
                            <p>AM</p>
                        </div>
                    </div>
                </div>

                <div className="add-notes">
                    <p>Update Notes:</p>
                </div>

                <div className="share-with">
                    <p>Share with:</p>
                    <div className="coll-display">
                        <p>@username</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

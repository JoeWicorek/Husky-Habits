import React from 'react';

export function CreateTaskScreen(props) {
    return (
        <div>
            <nav className="top-dock">
                <a href="index.html" className="nav-link left">Cancel</a>
                <h1 className="nav-title">Create Task</h1>
                <a href="index.html" className="nav-link right"> Done </a>
            </nav>

            <main>
                <form className="task-form">
                    <section className="task-section">
                        <div className="image-upload-container">
                            <div className="circle-image">
                                <img src="img/circle.png" alt="Circle" />
                            </div>
                            <a href="#" className="image-link">Upload Image</a>
                        </div>
                        <div className="task-name-display">
                            <input type="text" placeholder="Enter task name" name="taskName" />
                        </div>
                    </section>

                    <section className="task-details">
                        <div className="select-day">
                            {/* Monday */}
                            <img src="img/mon.png" alt="Monday" />
                            <input type="hidden" name="monday" value="0" />

                            {/* Tuesday */}
                            <input type="hidden" name="tuesday" value="0" />
                            <img src="img/tue.png" alt="Tuesday" />

                            {/* Wednesday */}
                            <input type="hidden" name="wednesday" value="0" />
                            <img src="img/wed.png" alt="Wednesday" />

                            {/* Thursday */}
                            <input type="hidden" name="thursday" value="0" />
                            <img src="img/thur.png" alt="Thursday" />

                            {/* Friday */}
                            <input type="hidden" name="friday" value="0" />
                            <img src="img/fri.png" alt="Friday" />

                            {/* Saturday */}
                            <input type="hidden" name="saturday" value="0" />
                            <img src="img/sat.png" alt="Saturday" />

                            {/* Sunday */}
                            <input type="hidden" name="sunday" value="0" />
                            <img src="img/sun.png" alt="Sunday" />
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
                            <input type="text" placeholder="Notes" name="notes" />
                        </div>

                        <div className="share-with">
                            <p>Share with:</p>
                            <div className="coll-display">
                                <p>@username</p>
                            </div>
                        </div>
                    </section>
                </form>
            </main>
        </div>
    );
}

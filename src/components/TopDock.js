import React from 'react';

export function TopDock(props) {
    const dockTitle = props.dockTitleName;
    return (
        <div>
            <nav className="top-dock">
                <a href="index.html" className="nav-link left">Cancel</a>
                <h1 className="nav-title">{dockTitle}</h1>
                <a href="index.html" className="nav-link right"> Done </a>
            </nav>
        </div>
    );

}
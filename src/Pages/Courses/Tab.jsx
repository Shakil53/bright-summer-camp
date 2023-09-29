import React from 'react';
import { Link } from 'react-router-dom';

const Tab = () => {
    return (
        <div className="tabs">
            <Link className="tab tab-bordered">Tab 1</Link>
            <Link className="tab tab-bordered tab-active">Tab 2</Link>
            <Link className="tab tab-bordered">Tab 3</Link>
        </div>
    );
};

export default Tab;
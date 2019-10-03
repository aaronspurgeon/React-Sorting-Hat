import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the sorting hat game! Click the button below to begin</h1>
            <Link to='/questions'>Start</Link>
        </div>
    )
}

export default Welcome;



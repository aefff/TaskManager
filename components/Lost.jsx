import React from 'react';

function Lost({ setCurrentView }) {
    return (
        <div>
            <p>You seem to be lost</p>
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
        </div>
    )
}

export default Lost;
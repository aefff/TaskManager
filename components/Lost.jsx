import React, {useContext} from 'react';
import { AppContext } from "../AppContent.jsx";

function Lost() {

    const {setCurrentView} = useContext(AppContext);

    return (
        <div>
            <p>You seem to be lost</p>
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
        </div>
    )
}

export default Lost;
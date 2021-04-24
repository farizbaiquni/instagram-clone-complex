import React from 'react';
import sss from 'react-dom';
import './index.css';
import App from './App';
import FirebaseContext from './context/firebase'; 
import { firebase, fieldValue } from './lib/firebase'

sss.render( 
    <FirebaseContext.Provider value={{firebase, fieldValue}}> 
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);


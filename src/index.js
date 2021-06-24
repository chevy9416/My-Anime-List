import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  FirebaseAppProvider
} from 'reactfire';
import firebase from './firebase-config';



ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebase}>

    <Suspense fallback={'Connecting to app....'}>
      <App />

    </Suspense>

  </FirebaseAppProvider >
), document.getElementById('root')
);

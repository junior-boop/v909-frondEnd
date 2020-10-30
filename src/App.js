import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './navigation/navigation';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
          <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>

          <script>
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
              apiKey: "AIzaSyCOdfML9TeeeCpOGG9sVlKa5nndEkczisw",
              authDomain: "v909-d9eec.firebaseapp.com",
              databaseURL: "https://v909-d9eec.firebaseio.com",
              projectId: "v909-d9eec",
              storageBucket: "v909-d9eec.appspot.com",
              messagingSenderId: "670051060419",
              appId: "1:670051060419:web:083b520402e7c9752ef076",
              measurementId: "G-BHKJ4GZXQV"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
          </script>
      </Helmet>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;

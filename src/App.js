import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import { useState , useEffect } from 'react';
import db from './firebase';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
         <Sidebar />

      {/* Feed */}

         <Feed />
      {/* Widgets */}

         <Widget />
    </div>
  );
}

export default App;

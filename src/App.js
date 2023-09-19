import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;

  const[progress,setprogress]=useState(0);
  

    return (
      <div>
        
        <Router>
          
          <NavBar />
          <LoadingBar
          height={3.5}
        color='	#880808'
        progress={progress}
      />
          <Routes>
          <Route exact path="/Entertainment" element={<News setprogress={setprogress} apiKey={apiKey} key="Entertainment" pageSize={5} country='us' category='Entertainment' />} />
            <Route exact path="/Business" element={<News setprogress={setprogress} apiKey={apiKey} key="Business" pageSize={5} country='us' category='Business' />} />
            <Route exact path="/General" element={<News setprogress={setprogress} apiKey={apiKey} key="General" pageSize={5} country='us' category='General' />} />
            <Route exact path="/Health" element={<News setprogress={setprogress} apiKey={apiKey} key="Health"pageSize={5} country='us' category='Health' />} />
            <Route exact path="/Science" element={<News setprogress={setprogress} apiKey={apiKey} key="Science"pageSize={5} country='us' category='Science' />} />
            <Route exact path="/Sports" element={<News setprogress={setprogress} apiKey={apiKey} key="Sports"pageSize={5} country='us' category='Sports' />} />
            <Route exact path="/Technology" element={<News setprogress={setprogress} apiKey={apiKey} key="Technology" pageSize={5} country='us' category='Technology' />} />

          </Routes>
        </Router>
      </div>
    )
  }
export default App

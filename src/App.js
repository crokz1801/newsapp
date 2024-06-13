// import logo from './logo.svg';
import './App.css';

import React, {  useState } from 'react'
import Navbar from './component1/Navbar';
import News from './component1/News';
// import Spin from './component1/Spin.js';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App(){
const apiKey= process.env.REACT_APP_API_KEY
const pageSize=8;
const[progress , setProgress] =useState(0);


    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}


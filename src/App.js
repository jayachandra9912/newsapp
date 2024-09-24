
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {

  Route,
  Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  // 'ba0e28cbbae64442b93b0be1ec75900a'
  const [progress, setProgress] = useState(0)




  return (
    <div>

      <Navbar />


      <LoadingBar
        color='#f11946'
        progress={progress}
        height={2} />

      <Routes>

        <Route exact path='/newsapp' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='science' />}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>

      </Routes>

    </div>
  )

}
export default App;


import React, { Component } from 'react'

import NavBar from './component/netflix/NavBar/NavBar'
import './App.css'
// import Banner from './component/netflix/Banner/Banner'
// import RowPost from './component/netflix/RowPost/RowPost'
// import {originals,comedy,herror,action} from './Urls'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RTable from './component/netflix/RTable/RTable'
import RTableData from './component/netflix/RTableData/RTableData'
import Home from '../../Netflix-clone/src/component/netflix/Home'


export default class App extends Component {
// export default function App(){
  render() {
    return (

      <>

      
      <Router>
        <NavBar />
        <Routes>
        
          <Route path="/" exact element={<Home/>} />
          <Route path="/table" element={<RTable/>} />
          <Route path="/data" element={<RTableData/>} />
        </Routes>
        
      </Router>
      </>

    )
  }
}


 // <div>
        // <NavBar/>
        // <Banner/>
        // <RowPost url={originals} title='Netflix Originals'/>
        // <RowPost url={comedy} title='Comedy Movies' isSmall/>
        // <RowPost url={herror} title='Herror Movies' />
        // <RowPost url={action} title='Action Movies' isSmall/>
        // </div>
        {/* <Router>
          <NavBar/>
          </Router>
          <Router exact path="/">
          <Home/>
          </Router>
          
          <Router path="/table">
          <RTable/>
          </Router>
          <Router path="/data">
          <RTableData/>
        </Router> */}
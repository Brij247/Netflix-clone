import React, { Component } from 'react'

import NavBar from './component/netflix/NavBar/NavBar'
import './App.css'
import Banner from './component/netflix/Banner/Banner'
import RowPost from './component/netflix/RowPost/RowPost'
import {originals,comedy,herror,action} from './Urls'

export default class App extends Component {
// export default function App(){
  render() {
    return (
        <div>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={comedy} title='Comedy Movies' isSmall/>
        <RowPost url={herror} title='Herror Movies' />
        <RowPost url={action} title='Action Movies' isSmall/>
        </div>

    )
  }
}

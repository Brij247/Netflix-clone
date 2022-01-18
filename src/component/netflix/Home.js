import React from 'react'
import Banner from '../netflix/Banner/Banner'
import RowPost from '../netflix/RowPost/RowPost'
import {originals,comedy,herror,action} from '../../Urls'

function Home() {
    return (
        <div>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={comedy} title='Comedy Movies' isSmall/>
        <RowPost url={herror} title='Herror Movies' />
        <RowPost url={action} title='Action Movies' isSmall/> 
        </div>
    )
}

export default Home

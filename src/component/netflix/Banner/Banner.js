import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../../constance/constance'
import axios from '../../../axios'
import './Banner.css'
import {originals} from '../../../Urls'

function Banner() {
const [movie, setMovie] = useState([])

// const [activeCity, setActiveCity] = useState(0);

//   const randomNUm = e => {
//     const len = 20;
//     setActiveCity(Math.floor(Math.random() * len));
//   };

useEffect(() => {
    axios.get(originals).then((response)=>{
        console.log(response.data.results[0]);
        setMovie(response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
        ])

    }) 
}, [])

// useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.originals.length - 1)
//         ]
//       );
//     }
//     fetchData();
//   }, []);

    return (
        <div 
        style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie?movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner

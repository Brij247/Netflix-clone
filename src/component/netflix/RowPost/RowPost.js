import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../../axios'
import {imageUrl,API_KEY} from '../../../constance/constance'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlid] = useState('')

    
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            //alert('network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };


    const handleMovie = (id)=> {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data);
            if(response.data.results.length!==0){
                setUrlid(response.data.results[0])
            }else{
                console.log('Array empty');
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'> 
                {movies.map((obj)=>
   
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster_img'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
               
            </div>
          {urlid &&  <Youtube videoId={urlid.key} opts={opts} />}
        </div>
    )
}

export default RowPost

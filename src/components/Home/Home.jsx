import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from '../axios'
import { API_KEY ,imgUrl} from '../Constants'
function Home() {

  const [movie,setMovie]=useState()

 useEffect(() => {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
   
    
  })
 
 }, []) 
 
  return (
  
    <div style={{backgroundImage:`url(${movie? imgUrl+movie.backdrop_path:""})`}} className='home'>
      <div className='content'>
        <h1 className='title' >{movie?movie.name:""}</h1>

        <h5 className='description'>{movie?movie.overview:""}</h5>
     
      <div className='home_button'>
        <button className='button'>Watch Now</button>
        <button className='button'>+ My List</button>

      </div>
     
      </div>
      <div className='home_bottom'></div>
    </div>
   
  )
}

export default Home

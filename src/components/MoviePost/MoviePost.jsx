import React, { useEffect, useState } from 'react'
import './MoviePost.css'
import axios from '../axios'
import { imgUrl } from '../Constants'


function MoviePost(props) {
 
  const [post,setPosts]=useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setPosts(response.data.results)
      
    })
    
  }, [])
  
  return (
    <div className='rows'>
      <h3 className='mt-3'>{props.title}</h3>
      <div className='posters'>
  {post.map((item)=>
  <img className={props.isSmall?'smallposter':'poster'} src={`${imgUrl+ item.backdrop_path}`} alt=""/>
  
  
  
  )}  

      </div>
    </div>
  )
}

export default MoviePost

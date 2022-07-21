import React from 'react'
import $ from 'jquery';
import axios from 'axios'
import { useState,useEffect } from 'react';
const Like = ({singleData}) => {
      const [data,setData]=useState([]);
      const [like,setLike]=useState(0);
      useEffect(()=>{
              axios.get(`http://localhost:8000/post`)
                   .then(response=>setData(response.data));
            setLike(singleData.likes);

       },[])
      const addLike=(e)=>{
            var heart=e.target.className;
            $(`.${heart}`).html('♥').css('color','red');
            console.log(heart);
            axios.post(`http://localhost:8000/post/update/${singleData._id}`,{likes:singleData.likes+1}).then(()=>console.log('Successfullyy updated like+1'));
            setLike(singleData.likes+1);
          }
  return (
    <>
    <a className={`${singleData.name}`} onClick={addLike} style={{fontSize:25,padding:5,textDecoration:'none',cursor:'pointer'}}>♡</a>
    {singleData.likes!=0? <span className='likeCount'>{like}</span>:''}
    </>
  )
}

export default Like
import React from 'react'

import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


const Comment = ({singleData,comment}) => {
  const Navigate=useNavigate();
   const inside=()=>{
           setTimeout(()=>{
             comment(singleData);
           },500)      

   }
  return (
          <>
           <a  className={`${singleData._id} my-1`} id="commentBox" style={{color:'red',cursor:'pointer',float:'right'}} onClick={inside}>💬</a>
          </>
      )
}

export default Comment
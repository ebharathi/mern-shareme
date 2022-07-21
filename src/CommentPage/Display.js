import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import FadeLoader from 'react-spinners/FadeLoader'

const Display = ({singleData}) => {
     
        // console.log(today)
      // console.log(singleData.name+'ye')
      const [post,setPost]=useState([]);
     useEffect(()=>{
      axios.get('http://localhost:8000/post')
      .then(response=>{
        setPost(response.data)
        console.log(response.data)
      }
        )
     },[])
  return (
//     <div>{post.map((p)=>p._id==singleData._id?p.comment.map((d)=>
//      <h1>{d}</h1>
//       //     <>
// //     <h6 key={Math.random()}>{d}</h6>
// //     <p>{p.createdAt}</p></>
//     ):'empty')}</div>
    // <div>
    //       {post.map((p)=>p._id==singleData._id?p.comment.map((c)=><p>{c}<br /><span style={{fontSize:10}}>{p.updatedAt.substring(0,10)}</span></p>):'no')}
    // </div>
    <div>
      {post!=''?post.map(p=>p.id==singleData._id?p.comment==''?<h6>No Comments Yet.</h6>:p.comment.map(cc=><div><h6>{cc.msg}</h6><p style={{fontSize:12}}>{cc.date}</p></div>):''):<div><div className='text-center' style={{marginLeft:'45%'}}><FadeLoader/></div><p className='text-center' style={{fontSize:12}}>Loading Comments</p></div>}
    </div>
  )
}

export default Display
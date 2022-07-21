import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import $ from 'jquery';
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import FadeLoader from 'react-spinners/FadeLoader'

import Like from './Like';
import Comment from './Comment';
const Post = ({comment}) => {
  let i=0;
  const [data,setData]=useState([]);
 useEffect(()=>{
      axios.get('http://localhost:8000/post')
      .then((res)=>setData(res.data))
    
 },[])
//  const hoverfun=(e)=>{
//     console.log(e.target.className)
//     $(`${e.target.className}`).css('width','90%')
//  }

 //LIKE COMMENTS

  

 if(data=='')
   return <div className="text-center" style={{marginLeft:'45%'}}><FadeLoader /></div>
  return (
    <div className='post'>
         {/* {data.map((singleData)=>{
                  const base64String=btoa(
                        String.fromCharCode(...new Uint8Array((singleData.img.data.data)))
                      )
                 return <div className="col-sm-3 img-fluid" key={singleData.name}><img key={singleData.email} src={`data:image/png;base64,${base64String}`}/></div>        } */}
       {/* <div className="row"> */}
       <ResponsiveMasonry columnsCountBreakPoints={{100:1,340:2,800:3}}>
       <Masonry>
       {data.map((singleData)=>{
         var binary='';
         var bytes=new Uint8Array((singleData.img.data.data))
         var len=bytes.byteLength;
         for(var i=0;i<len;i++)
            {
              binary+=String.fromCharCode(bytes[i])
            }
             const base64String=btoa(binary)
             i++;
             return <div className={`py-4 px-1 img-fluid`} style={{cursor:'',padding:'2px',border:''}} key={Math.random()}>
               <img className={`img${i}`} style={{width:'100%',height:'100%'}} key={Math.random()} src={`data:image/png;base64,${base64String}`}/>
               <div className="lc" style={{border:'1px solid black',borderRadius:3,borderTop:'none',borderTopLeftRadius:0,borderTopRightRadius:0}}>
               <div className="likeComment">
               <Like singleData={singleData} />
               <Comment  singleData={singleData} comment={comment}/>
               </div>
               </div>
            </div>
       })}
       </Masonry>
       </ResponsiveMasonry>
       {/* </div> */}
    </div>
  )
}

export default Post
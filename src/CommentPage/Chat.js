import React, { useState } from 'react'
import axios from 'axios';

import Display from './Display';

const Chat = ({singleData}) => {
      const [msg,setMsg]=useState('');
      // console.log(singleData.comment)
      var binary='';
         var bytes=new Uint8Array((singleData.img.data.data))
         var len=bytes.byteLength;
         for(var i=0;i<len;i++)
            {
              binary+=String.fromCharCode(bytes[i])
            }
             const base64String=btoa(binary);

             //date
             var today=new Date();
             var dd = String(today.getDate()).padStart(2, '0');
             var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
             var yyyy = today.getFullYear();
             today = mm + '/' + dd + '/' + yyyy;
             const send=()=>{
                        const newCum={
                              msge:msg,
                              date:today
                        }
                        
                        singleData.comment.push(newCum);
                        // console.log(singleData.comment)
                         axios.post(`http://localhost:8000/post/update/comment/${singleData._id}`,
                         {
                               comment:singleData.comment
                         }).then(()=>console.log('Updated successfully comment'))                     
             }
  return (
    <section>
            <div className="row">
                  <div className="col-sm-6 img-fluid" style={{borderRight:'1px solid black'}}>
                        <img src={`data:image/png;base64,${base64String}`} style={{width:'100%',height:''}} className={`${singleData.name}`} alt="" />
                  </div>
                  <div className="col-sm-6">
                        <h4 className='text-center'>COMMENTS</h4>
                        <textarea name="commet" id="comment" placeholder='Write something about this post....' style={{width:'100%'}}  rows="5" onChange={(e)=>setMsg(e.target.value)}/>
                        <button className='btn-outline-danger' style={{float:'right'}} onClick={send}>POST</button><br /><br />
                        <hr />
                        {/* {singleData.comment!=''?singleData.comment.map((d)=><h6>{d}</h6>):<h1>EMpty</h1>} */}
                        <Display singleData={singleData} />
                  </div>
            </div>
             {/* <img src={`data:image/png;base64,${base64String}`} className={`${singleData.name}`} /> */}
    </section>
  )
}

export default Chat
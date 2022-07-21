import React, { useState } from 'react'
import Upload from './Upload'
import Post from './Post'
import Chat from '../CommentPage/Chat'
import $ from 'jquery'
const Main = () => {
      const [changeComponent,setComponent]=useState(0);
      if(changeComponent==0)
        {
           $('.home').css('color','red')
           $('.upload').css('color','black');

        }
      if(changeComponent==1)
      {
            $('.home').css('color','black');
            $('.upload').css('color','red');
      }
      const [arr,setArr]=useState([]);
      const comment=(data)=>{
            setArr(data);
            setComponent(-1);
      }
  return (
    <main className='container text-dark' style={{border:'1px solid white'}}>
        <div className="row ">
              <div className="col-sm-3" style={{backgroundColor:'',borderRight:'4px solid white',borderRadius:4}}>
                    <section className="left">
                          <div className="menu text-center " style={{border:'1px solid black',borderRadius:3}}>
                                <a href="#" className="a home py-2" style={{color:'red'}} onClick={()=>setComponent(0)}><i className="fas fa-home"></i><span style={{fontWeight:'bolder'}}>Home</span></a>
                                <a href="#" className="b upload py-1" style={{color:'black'}} onClick={()=>setComponent(1)}><i className="fas fa-upload"></i> <span style={{fontWeight:'bolder'}}>Upload</span></a>
                          </div>
                    </section>
              </div>   
              <div className="col-sm-9 py-3  " style={{backgroundColor:'#fff',borderRadius:4}}>
                       {changeComponent==0?<Post comment={comment}/>:changeComponent==1?<Upload />:<Chat singleData={arr} />}
              </div>
        </div>
    </main>
  )
}

export default Main
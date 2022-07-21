import React from 'react'
import axios from 'axios';
import { useState,useEffetc } from 'react';
import $ from 'jquery';
import cities from 'cities.json';
const Upload = () => {
      //   console.log(cities);
      const [file,setFile]=useState(false);
      const [name,setName]=useState('');
      const [desc,setDesc]=useState('');
      const [change,setChange]=useState(0);
     const sendData=(e)=>{
            e.preventDefault();
            var form = $('.uploadForm')[0];
            var data = new FormData(form);
            
            $('.submitone').attr('value','PLEASE WAIT WHILE UPLOADING');
            $('.submitone').attr('disabled','disabled');
          
            $.ajax({
                  type:'POST',
                  url:'http://localhost:8000/post/add',
                  data:data,
                  success:function(res){
                       $('.submitone').attr('value','UPLOADED SUCCESSFULLY!');
                       $('.submitone').removeAttr('disabled');
                       $(".previewImg").remove();
                       setTimeout(()=>{
                       $('.submitone').attr('value','POST');
                       },2500)
                        console.log('Uploaded successfully');
                        $('.uploadForm')[0].reset();
                        $('#tickLabel').html('+'); 

                  },
                  error:function(){
                        $('.submitone').attr('value','FAILED TO UPLOAD !PLEASE REFRESH & TRY AGAIN');
                       $('.submitone').removeAttr('disabled');
                       setTimeout(()=>{
                        $('.submitone').attr('value','POST');
                        },2500)
                  },
                  processData:false,
                  contentType:false

            })
      }

      $(document).ready(function(){
            $('.file').change(function(){
                  setFile(true);
                $('#tickLabel').html('✔️');
                $(".output").html('');
                for (var i = 0; i < $(this)[0].files.length; i++) {
                    $(".output").append('<img class="previewImg" src="'+window.URL.createObjectURL(this.files[i])+'" width="100%" height="100%"/>');
                }
            });
        });
      return (
    <div className="uploadsection">
          <form action="" encType='multipart/form-data' className='uploadForm text-center my-3' onSubmit={sendData}>
                <label id="tickLabel" htmlFor="file" style={{fontSize:'40px',cursor:'pointer',border:'1px solid black',borderRadius:4,padding:'0px 13px'}}>
                +
                </label>
               <div className="row">
                     <div className="col-sm-3"></div>
                     <div className="col-sm-6 text-center">
                         <input type="file"  className='file form-control' id="file" style={{visibility:'hidden',cursor:'pointer'}} name="uploadingFileHere" />
                     </div>
                     <div className="col-sm-3"></div>
               </div>
               <div className="output">

               </div><br/>

               {/*OTHER ELEMENTS*/}
               
                <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                      <textarea type="text" id='name' name="desc" rows="4" className='form-control' placeholder='Write a Caption...' onChange={(e)=>setDesc(e.target.value)} required/>
                      </div>
                      <div className="col-2"></div>
                </div><br />
                <div className="row">
                      <div className="col-4"></div>
                      <div className="col-5">
                      {/* <input type="text" id='name' name="name" className='form-control' placeholder='Add Location' onChange={(e)=>setName(e.target.value)}/> */}
                     <select className='' name="location" id="city" style={{width:'100%',padding:'7px 7px',borderRadius:4,border:'1px solid #706e6e'}} required>
                           <option value="none">
                             Add Location
                           </option>
                           {cities.map((c)=>c.country=='IN'?<option key={c.name+c.lat}>{c.name}</option>:'')}
                     </select>
                      </div>
                      <div className="col-3"></div>
                </div><br />
                <div className="row">
                      <div className="col-4"></div>
                      <div className="col-5">
                            <input type="text" className="" id="name" name="name" placeholder="Uploader Name" style={{width:'100%',padding:'7px 7px',borderRadius:4,border:'1px solid #706e6e'}} required />
                      </div>
                      <div className="col-3"></div>
                </div>
                <br />
                <input type="submit"  className='btn btn-outline-danger submitone' value="POST"/>
          </form>
         
    </div>
  )
}

export default Upload
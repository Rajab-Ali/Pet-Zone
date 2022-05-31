import React, { useState } from 'react'
import ProfileImg from '../../Images/profileImg.jpg'
import UploadImgIcon from '../../Images/uploadImg.png'
import './createpost.css'
const Index = ({banner, setBanner , setVariant}) => {
  const [img,setImg] = useState('')
  return (
      <>  
        <div className=' card rounded-4 m-4 py-4 px-3'>
            <div className='user-info-card'>
                <img className='profile-img' src={ProfileImg} alt='profile img' loading='lazy' />
                <div className='create-post-modal-trigger' data-mdb-toggle="modal" data-mdb-target="#exampleModal" ><p>What's on your mind? Mr. XYZ</p></div>
            </div>
        </div>



{/* Create Post modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title ml-auto" id="exampleModalLabel">Create Post</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='user-info-card'>
                <img className='profile-img' src={ProfileImg} alt='profile img' loading='lazy' />
                <div className=' modal-user-info-cont'>
                    <p className='ms-2'>CH. Rajab Ali</p>
                </div>
            </div> 
            <div className='mt-3'>
                <form>
                    <div className='form-group'>
                        <textarea className='form-control' type='text' placeholder="What's on your mind? Mr. XYZ" rows={4}></textarea> 
                    </div>
                </form>
                <div style={{display:img===''?'none':''}} className='mt-3 p-3'>
                  <img src={img} alt='uploaded img' className='uploaded-image' />
                </div>
                <div className='mt-4 modal-add-to-post'>
                    <p className='pt-2 ps-2'>Add to your post</p>
                    <div className='add-to-post-icons'>
                      <div className='d-flex upload-btn-wrapper'>
                          <input onChange={(e)=> {
                            const [file] = e.target.files
                            setImg(URL.createObjectURL(file))
                            }} type='file' name='myfile' />
                          <i style={{backgroundImage:`url(${UploadImgIcon})`}} className='upload-img'></i>
                        </div>  
                    </div>
                </div>
            </div>
      </div>
      <div class="modal-footer">
        <button onClick={()=> {
          setBanner(true)
          setVariant('success')
          setImg('')
        }} type="button" class="btn btn-primary" data-mdb-dismiss="modal" aria-label="Close">Post</button>
      </div>
    </div>
  </div>
</div>

      </>

  )
}

export default Index
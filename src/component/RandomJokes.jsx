import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import axios from 'axios';
import { useStepContext } from '@mui/material';
import {useState, useEffect} from 'react'

function RandomJokes() {
  const [content, setContent] = useState("Chuck Norris once challenged Lance Armstrong in a \"Who has more testicles?\" contest. Chuck Norris won by 5.")

  const getContent = async () => {
     const res = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random')
     setContent(res?.data.data.content);
  }

  useEffect(() => {
    getContent()
  }, [])
  
  return (
    <div className='flex justify-center items-center h-lvh'>
        <div className='w-[700px] rounded-lg bg-black text-white p-5'>
            <div className='flex gap-10'>
                <ArrowBackIcon/>
                <p>Post</p>
            </div>

            <div className='flex items-center gap-3 my-4'>
                <img  className='w-16 h-16 rounded-full object-cover' src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23906794/VRG_Illo_STK022_K_Radtke_Musk_Bolts.jpg" alt="" />
                <div>
                    <p className='font-bold text-xl'>Elon Musk</p>
                    <p>@elonmusk</p>
                </div>
            </div>
            <div className='my-4'>{content}</div>
            <p>11:58 PM - Jul 30, 2025 - <span>20.5M</span> Views</p>
            <div className='p-2 py-4 flex justify-evenly border-y-2 mt-6'>
                <div className='flex'>
                    <ChatBubbleOutlineIcon/>
                    <p>{Math.floor(Math.random() * 10)}K</p>
                </div>
                <div className='flex'>
                    <ChangeCircleOutlinedIcon/>
                    <p>{Math.floor(Math.random() * 10)}K</p>
                </div>
                <div className='flex'>
                    <FavoriteBorderOutlinedIcon/>
                    <p>{Math.floor(Math.random() * 100)}K</p>
                </div>
                <div className='flex'>
                    <BookmarkBorderIcon/>
                    <p>{Math.floor(Math.random() * 10)}K</p>
                </div>
                <div>
                    <FileUploadOutlinedIcon/>
                </div>
            </div>
            <p className='text-center m-8'>&copy; Chai aur Code</p>
        </div>
    </div>
  )
}

export default RandomJokes
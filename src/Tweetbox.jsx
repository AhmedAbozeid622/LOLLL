import React from 'react'
import './App.css';
import { Avatar, Button } from '@mui/material';

const Tweetbox = () => {
  return (
    <div className='tweetbox'>
       <form action="">
        <div className='tweetbox__input'>
            <Avatar src='./imgme.jpeg' />
            <input placeholder='What is happening' />
       

        </div>
             <input className='tweetbox__imginput' placeholder='Inter image URL'/>
        <Button className='tweetbutton'>Tweet</Button>
       </form>
    </div>
  )
}

export default Tweetbox
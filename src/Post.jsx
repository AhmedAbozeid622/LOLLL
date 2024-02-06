import React from 'react'
import './App.css';
import { Avatar } from '@mui/material';
import { ChatBubbleOutlineSharp, FavoriteBorderSharp, PublishSharp, RepeatSharp, VerifiedUserSharp } from '@mui/icons-material';

const Post = ({    displayName,    username,    verified,    text,    image,    avatar}) => {
  return (
    <div className='post'>
        <div className="post__avatar">
        <Avatar src={avatar} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headertext">
                    <h3>
                        {displayName} <span className='post__headerspecial'> 
                            {verified && <VerifiedUserSharp className='post__badge' />}@{username}
                            </span>
                    </h3>
                </div>
                <div className="post__headerdesc">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
                <ChatBubbleOutlineSharp fontSize='small'/>
                <RepeatSharp fontSize='small'/>
                <FavoriteBorderSharp fontSize='small'/>
                <PublishSharp fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post
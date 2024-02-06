import React, { useState , useEffect } from 'react'
import './App.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
         <h2>home</h2>
        </div>

        {/* Tweet Box */}
        <Tweetbox />

      {posts.map(post =>(
        <Post
         displayName={post.displayName}
         username={post.username}
         verified={post.verified}
         text={post.text}
         avatar={post.avatar}
         image={post.image}
        />
      ))}
    </div>
  )
}

export default Feed
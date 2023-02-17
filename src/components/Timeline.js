import {useState, useEffect} from 'react';
import CommentForm from './CommentForm.js';
import PostForm from './PostForm.js';
import Post from './Post.js';
import '../stylesheets/Timeline.css';
import '../stylesheets/Post.css';
import '../stylesheets/Comment.css';

function Timeline(props) {
  const [posts, setPosts] = useState(null);
  const [focusedPost, focusPost] = useState(null);
  
  useEffect(() => {
    fetchPosts(props.auth);
  });

  if (focusedPost) {
    return (
      <div className='timeline'>
        <div className='postHead'>
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='circle' className='svg-inline--fa fa-circle round placeholder' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path fill='currentColor' d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z'></path>
          </svg>
          <h3>{props.auth.user.username}'s Post</h3>
          <svg onClick={() => {
            focusPost(null);
            fetchPosts(props.auth);
          }} aria-hidden='true' focusable='false' data-prefix='fas' data-icon='xmark' className='svg-inline--fa fa-xmark icon round' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
            <path fill='currentColor' d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'></path>
          </svg>
        </div>
        <Post key={focusedPost._id} post={focusedPost} auth={props.auth} focus={focusPost}/>
        <CommentForm auth={props.auth} post={focusedPost} refreshPost={focusPost}/>
      </div>
    )
  } else {
    return (
      <div className='timeline'>
        {/* TODO: complete new post functionality/posts state update */}
        <PostForm auth={props.auth} update={fetchPosts}/>
        {posts}
      </div>
    )
  }

  async function fetchPosts(data) {
    await fetch('http://localhost:3001/api/' + data.user._id + '/timeline',
      {
        headers: {
          'Authorization': 'Bearer ' + data.token,
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      let arr = [];
      data.forEach(post => {
        arr.push(<Post key={post._id} post={post} auth={props.auth} focus={focusPost}/>);
      });
      setPosts(arr);
    })
    .catch(err => console.log(err));
  }
}

export default Timeline;
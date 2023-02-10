import {useState} from 'react';
import PostForm from './PostForm.js';
import Post from './Post.js';
import '../stylesheets/Timeline.css';

function Timeline(props) {
  const [posts, setPosts] = useState(null);
  
  if (!posts) {
    fetchPosts(props.auth);
  }

  return (
    <div className='timeline'>
      {/* TODO: complete new post functionality/posts state update */}
      <PostForm auth={props.auth} update={fetchPosts}/>
      {posts}
    </div>
  )

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
        arr.push(<Post key={post._id} post={post} auth={props.auth}/>);
      });
      setPosts(arr);
    })
    .catch(err => console.log(err));
  }
}

export default Timeline;
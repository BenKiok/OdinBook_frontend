import {useState} from 'react';
import PostForm from './PostForm.js';
import Post from './Post.js';
import '../stylesheets/Timeline.css';

function Timeline(props) {
  const [posts, setPosts] = useState(null);
  const fetchPosts = async data => {
    await fetch('http://localhost:3001/api/' + data.user._id + '/timeline',
      {
        headers: {
          'Authorization': 'Bearer ' + data.token
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      let arr = [];
      data.forEach(post => {
        arr.push(<Post key={post._id} post={post} user={props.auth.user}/>);
      });
      setPosts(arr);
    })
    .catch(err => console.log(err));
  }
  
  if (!posts) {
    fetchPosts(props.auth);
  }

  return (
    <div className='timeline'>
      <PostForm/>
      {posts}
    </div>
  );
}

export default Timeline;
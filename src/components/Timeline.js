import {useState} from 'react';

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
        arr.push(<h2 key={data.indexOf(post)}>{post.body}</h2>)
      });
      setPosts(arr);
    })
    .catch(err => console.log(err));
  }
  
  fetchPosts(props.auth);

  return posts;
}

export default Timeline;
function PostForm(props) {
  const pushNewPost = async event => {
    let body = event.target.parentNode.querySelector('textarea').value;
    event.preventDefault();

    if (!body.length) {
      return;
    }

    await fetch('http://localhost:3001/api/' + props.auth.user._id + '/new/post', 
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + props.auth.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body
        })
      }
    )
    .catch(err => console.log(err));

    props.update(props.auth);
  }

  return (
    <form className='post form'>
      <i className='icon round avatar'>me</i>
      <textarea type='text' name='body' placeholder="What's on your mind?"></textarea>
      <button onClick={e => pushNewPost(e)}>Post</button>
    </form>
  );
}

export default PostForm;
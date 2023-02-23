function CommentForm(props) {
  return (
    <div className='commentForm'>
      <form className='post form' onSubmit={e => pushNewComment(e, props.post, props.refreshPost)}>
        <i className='icon round avatar sm'>me</i>
        <input type='text' name='body' placeholder='Write a comment...'/>
      </form>
      <p>Press Enter to post.</p>
    </div>
  )
  async function pushNewComment(event, post, func) {
    let body = event.target.parentNode.querySelector('input').value;
    event.preventDefault();

    if (!body.length) {
      return false;
    }
    
    await fetch('http://localhost:3001/api/' + props.auth.user._id + '/new/comment/for_post/' + post._id, 
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
    
    event.target.parentNode.querySelector('input').value = '';
    
    await fetch('hhtp://localhost:3001/api/' + post._id,
      {
        headers: {
          'Authorization': 'Bearer ' + props.auth.token,
        }
      }
    )
    .then(res => res.json())
    .then(data => func(data))
    .catch(err => console.log(err));
  }
}

export default CommentForm;
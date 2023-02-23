function Comment(props) {
  return (
    <div className='comment'>
      <i className='icon round sm'></i>
      <div className='body'>
        <h4 className='author'>{props.comment.user.username}</h4>
        <p className='text'>{props.comment.body}</p>
      </div>
      <div className='footer'>
        <p className='footer-link'>Like</p>
        <p className='footer-link'>Reply</p>
        <p className='footer-link'>{props.comment.date}</p>
      </div>
    </div>
  )
}

export default Comment;
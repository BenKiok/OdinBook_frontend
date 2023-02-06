function PostForm(props) {
  return (
    <form className='post form'>
      <i className='icon round avatar'>me</i>
      <textarea type='text' name='body' placeholder="What's on your mind?"></textarea>
      <button>Post</button>
    </form>
  );
}

export default PostForm;
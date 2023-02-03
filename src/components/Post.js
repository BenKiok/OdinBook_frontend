import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Post(props) {
  return (
    <div className='post'>
      <i className='icon round'>ppl</i>
      <div className='post-meta'>
        <p>{props.user.username}</p>
        <p>{props.post.date}</p>
      </div>
      <h3>{props.post.body}</h3>
      {/* TODO: add conditional to hide div.post-numbers when there are no comments/likes */}
      <div className='post-numbers'>
        <div className='likes'>
          <FontAwesomeIcon className='square icon' icon={solid('thumbs-up')}/>
          <p>{props.post.likedBy.length}</p>
        </div>
        <div className='comments'>
          <div>{props.post.comments.length} comments</div>
        </div>
      </div>
      <div className='post-react'>
        <div className='react-btn like-react'>
          <FontAwesomeIcon className='square icon' icon={solid('thumbs-up')}/>
          <h4>Like</h4>
        </div>
        <div className='react-btn'>
          <FontAwesomeIcon className='square icon' icon={solid('message')}/>
          <h4>Comment</h4>
        </div>
        <div className='react-btn'>
          <FontAwesomeIcon className='square icon' icon={solid('share-from-square')}/>
          <h4>Share</h4>
        </div>
      </div>
    </div>
  )
}

export default Post;
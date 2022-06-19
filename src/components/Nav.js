import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../stylesheets/Nav.css';

function Nav() { 
  return (
    <div className='nav'>
      <nav>
        <div className='odinbook'>
          <FontAwesomeIcon className='round icon odinbook-logo' icon={solid('terminal')}/>
          <div className='search-bar'>
            <FontAwesomeIcon className='icon' icon={solid('magnifying-glass')}/>
            <input type='text' placeholder='Search OdinBook'/>
          </div>
        </div>
        <div className='nav-main'>
          <FontAwesomeIcon className='square icon' icon={solid('house')}/>
          <FontAwesomeIcon className='square icon' icon={solid('user-group')}/>
          <FontAwesomeIcon className='square icon' icon={solid('circle-user')}/>
        </div>
        <div className='nav-other'>
          <FontAwesomeIcon className='round icon' icon={solid('plus')}/>
          <FontAwesomeIcon className='round icon' icon={solid('comment-dots')}/>
          <FontAwesomeIcon className='round icon' icon={solid('bell')}/>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
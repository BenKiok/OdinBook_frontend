import {useState} from 'react';
import Login from './Login';
import Nav from './Nav';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  const [userData, setUserData] = useState(null);
  
  if (!userData) {
    return (
      <div className="App">
        <Login setData={setUserData}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Nav/>
        <FontAwesomeIcon icon={solid('thumbs-up')}/>
        <FontAwesomeIcon icon={regular('message')}/>
        <FontAwesomeIcon icon={regular('share-from-square')}/>
      </div>
    );
  }
}

export default App;
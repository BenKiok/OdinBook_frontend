import {useState} from 'react';
import Login from './Login';
import Nav from './Nav';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';

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
        <Nav logout={setUserData}/>
      </div>
    );
  }
}

export default App;
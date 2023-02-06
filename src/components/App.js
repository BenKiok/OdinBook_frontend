import {useState} from 'react';
import Login from './Login';
import Nav from './Nav';
import Timeline from './Timeline';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';

function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const storeUserData = data => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(JSON.parse(localStorage.getItem('userData')));
  }
  const clearUserData = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  }
  
  if (!userData) {
    return (
      <div className="App">
        <Login setData={storeUserData}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Nav logout={clearUserData}/>
        <Timeline auth={userData}/>
      </div>
    );
  }
}

export default App;
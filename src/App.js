import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfiles = (profileData) => {
    setProfiles([...profiles, profileData]);
  }

  return (
    <div>
      <div className='header'>Github user search</div>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;

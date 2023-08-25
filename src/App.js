import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfiles = (profileData) => {
    setProfiles([...profiles, profileData]);
  }

  return (
    <div>
      <div className='header'>Github user search</div>
      <Form onSubmit={addProfiles}/>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './layouts/Dashboard';
import Map from './layouts/Map';
import Livechat from './components/Livechat';

function App() {
  const [user, setUser] = useState(0);
  const handleChangeUser = (event) => {

  }
  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <Header />
        <Dashboard />
        <Map />
      </div>
      <Livechat />
    </div>
  );
}

export default App;

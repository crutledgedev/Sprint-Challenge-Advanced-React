import React from 'react';
import PlayerList from './components/PlayerList';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

function App() {

  const [darkMode, setToggleMode] = useDarkMode(false);

  return (
    <div className="App">
      <h1>FIFA Women's World Cup Players</h1>
       <button 
           onClick={setToggleMode}
           className={darkMode ? 'toggle toggled' : 'toggle'}
          >
          Dark Mode 
       </button>       
      <PlayerList />
    </div>
  );
}
export default App;
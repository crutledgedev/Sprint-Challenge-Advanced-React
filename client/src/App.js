import React from 'react';
import ClassComponent from './components/ClassComponent';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

function App() {

  const [darkMode, setToggleMode] = useDarkMode(false);

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
       <button 
           onClick={setToggleMode}
           className={darkMode ? 'toggle toggled' : 'toggle'}
          >
          Dark Mode 
       </button>       
      <ClassComponent />
    </div>
  );
}
export default App;
import React from 'react';
import './App.css';
import Textfield from './Textfield';


const App: React.FC = () => {
  return (
    <div className="App">
      <Textfield text='hello' person={{firstName: '', lastName: '',}} />
    </div>
  );
}

export default App;

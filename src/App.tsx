import React from 'react';
import './App.css';
import Textfield from './Textfield';
import {Counter }from './Counter'


const App: React.FC = () => {
  return (
    <div className="App">
      <Textfield text='hello' person={{ firstName: '', lastName: '', }} handleChange={e => {
        console.log('test')
      }} />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;

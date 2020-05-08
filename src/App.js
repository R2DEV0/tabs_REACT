import React, {useState} from 'react';
import './App.css';
import Tabs from './components/tabs'
import Display from './components/display';

function App() {
  const[state, setState] = useState('TAB 1')


  return (
    <div className="App">
      <Tabs state='TAB 1' setState={setState}/>
      <Tabs state='TAB 2' setState={setState}/>
      <Tabs state='TAB 3' setState={setState} />
      <Display state={state} setState={setState}/>
    </div>
  );
};

export default App;

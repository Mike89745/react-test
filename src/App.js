import React from 'react';
import PersonList from "./components/PersonList/PersonList"
import PersonForm from "./components/Form/Form.tsx"
import './App.css';

function App(props) {
  return (
    <div className="App container">
        <PersonList {...props}></PersonList>
        <PersonForm {...props}></PersonForm>
    </div>
  );
}

export default App;

import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import ReactFormik from "./components/ReactFormik/ReactFormik";

import './App.css';

function App() {
  return (
    <div className="App">
        <h1 style={{color: 'white'}}>ReactHookForm</h1>
        <ReactHookForm />

        <h1 style={{color: 'white', paddingTop: '40px'}}>ReactFormik</h1>
        <ReactFormik />
    </div>
  );
}

export default App;

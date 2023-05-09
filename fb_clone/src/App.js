import './App.css';
import {Route,Routes} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';





function App() {
  return (

    <div className="App">
        <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='home' element={<Dashboard/>}></Route>

        </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login Page/login.component';
import Dashboard from './components/Dashborad/dasboard.component';
import Graph from './components/graph/graph.component';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Login/>}/>
        <Route path='/itemsdashboard' element={<Dashboard/>}/>
        <Route path='/datarepresentation' element={<Graph/>}/>
      </Routes>
    </div>
  );
}

export default App;

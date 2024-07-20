import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Progress from './Progress';

function App() {
  return (
  

<div className="App">
<header className="App-header">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signup/progress" element={<Progress/>}/>
        </Routes>
    </BrowserRouter>
</header>
</div>
  );
}

export default App;

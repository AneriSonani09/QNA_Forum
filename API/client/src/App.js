import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Answer from './Answer';
import AskQ from './AskQ';
import Signup from './Signup';
import Login from './Login';
// import Profile from './Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="AskQuestion" element={<AskQ />} />
        <Route path="answer" element={<Answer />} />
        {/* <Route path="Profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;

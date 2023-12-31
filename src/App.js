import './App.css';
import StartScreen from './routes/StartScreen.js';
import Authentication from './routes/Authentication.js';
import Verification from './routes/Verification.js';
import SetNickName from './routes/SetNickName.js';
import Home from './routes/Home.js';
import Chats from './routes/Chats.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChattingRoom from './routes/ChattingRoom.js';
import ProfileDetail from './routes/ProfileDetail';

function App() {
  const navigator = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <StartScreen navigator={navigator}/> }/>
        <Route path='/Authentication' element={ <Authentication navigator={navigator}/> }/>
        <Route path='/Verification' element={ <Verification navigator={navigator}/> }/>        
        <Route path='/SetNickName' element={ <SetNickName navigator={navigator}/> }/>
        <Route path='/Home' element={ <Home navigator={navigator}/> }/>
        <Route path='/Chats' element={ <Chats navigator={navigator}/> }/>
        <Route path='/ChattingRoom' element={ <ChattingRoom navigator={navigator}/> }/> 
        <Route path="/ProfileDetail/:userId" element={ <ProfileDetail navigator={navigator} /> }/>        
      </Routes>
    </div>
  );
}

export default App;

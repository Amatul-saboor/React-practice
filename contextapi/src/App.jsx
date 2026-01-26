
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Userprovider from './context/Userprovider'

function App() {

  return (
    
    <Userprovider>
      <Login />
      <Profile />
    </Userprovider>
    
  )
}

export default App

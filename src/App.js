import {useAuth0} from '@auth0/auth0-react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';

function App() {
  const {user,loginWithRedirect, isAuthenticated, logout }= useAuth0();

  console.log('current user' , user);
  return (
    <div className='App'>
      <header className='App-header'>
<<<<<<< HEAD
        {isAuthenticated && <h3>Hello gee {user.name}</h3>}
=======
        {isAuthenticated && <h3>Welcome to DigiMark Developers {user.name}</h3>}
        <p>We provied the world bes serves ever in this world</p>
>>>>>>> d2cd208 (Your commit message here)
        {
          isAuthenticated ? <button onClick={e => logout()}>Logout</button> :<button onClick={e => loginWithRedirect()}>Login with react  </button>
        }
      
      </header>
<<<<<<< HEAD
      <Routes>
=======
      {/* <Routes>
>>>>>>> d2cd208 (Your commit message here)
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/details' element={<Details />} />


<<<<<<< HEAD
       </Routes>
=======
       </Routes> */}
>>>>>>> d2cd208 (Your commit message here)
    


    </div>

    
    // <>
    // <Header>
    //   <button onClick={(e)=>loginWithRedirect()}> login with redirect</button>
    // </Header>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/details' element={<Details />} />


    //   </Routes>
    // </>
  );
}

export default App;

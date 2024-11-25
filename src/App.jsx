import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import UserContextProvider from './ContextAPI/UserContextProvider';
import './App.css';

function App() {
  return (
    <>  <UserContextProvider>
         <BrowserRouter>
          <Routes>
            <Route index element={<Registration/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Product/:id' element={<Collection/>}/>
            <Route path='/Registration' element = {<Registration/>}/>
            <Route path='/Login' element = {<Login/>}/>
            <Route path='/Checkout' element = {<Checkout/>}/>          
          </Routes>
         </BrowserRouter> 
         </UserContextProvider>
    </>
  )
}
export default App

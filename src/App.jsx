import Navbar from './Components/Navbar.jsx'
import Search from './Components/Search.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CardDetails from './Components/CardsDetails.jsx';
import Carts from './Components/Carts.jsx'
import {SearchProvider} from './Components/SearchContext.jsx'
import WishList from './Components/WishList.jsx';
import SignUp from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';

export default function App(){
  return(
    <SearchProvider>
    <BrowserRouter>
     <Navbar/>
      <div style={{ paddingTop: '57px' }}> 
    <Routes>
   <Route path = '/wishList' element = {<WishList/>}/>
    <Route path='/' element={<Search/>}/>
    <Route path='/CardsDetail/:id' element={<CardDetails/>} />
    <Route path = '/cart' element = {<Carts/>}/>
    <Route path = '/SignUpPath' element = {<SignUp/>}/>
    <Route path = '/LogInPath' element = {<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </SearchProvider>
  )
}
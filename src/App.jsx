import Navbar from './Components/Navbar.jsx'
import Search from './Components/Search.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CardDetails from './Components/CardsDetails.jsx';
import Carts from './Components/Carts.jsx'
import {SearchProvider} from './Components/SearchContext.jsx'
import WishList from './Components/WishList.jsx';

export default function App(){
  return(
    <SearchProvider>
    <BrowserRouter>
     <Navbar/>
     <main style={{paddingTop:'60px' }}></main>
    <Routes>  
   <Route path = '/wishList' element = {<WishList/>}/>
    <Route path='/' element={<Search/>}/>
    <Route path='/CardsDetail/:id' element={<CardDetails/>} />
    <Route path = '/cart' element = {<Carts/>}/>
    </Routes>
    </BrowserRouter>
    </SearchProvider>
  )
}
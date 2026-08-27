
import {useContext } from 'react'
import {SearchContext} from './SearchContext.jsx'

export default function WishList(){

 const {wishList,setWishList} = useContext(SearchContext);
    return(
<>
 {
 wishList.length === 0 ?(
    <h1>You do not have any wishlist items</h1>
 ):(
 wishList.map((product)=>(
    <div key = {product.id}>
        < img src = {product.thumbnail}/>
        <h1>{product.title}</h1>
        <h3>Price: ${product.price}</h3>
    </div>))
   ) }
</>
    )
}
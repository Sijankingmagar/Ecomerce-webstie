import {createContext} from 'react'
import {useState} from 'react';

export const SearchContext = createContext();

export function SearchProvider({children}){
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);

    return(
        <SearchContext.Provider value ={{cart, setCart, wishList,setWishList}}>
            {children}
        </SearchContext.Provider>
    )
}
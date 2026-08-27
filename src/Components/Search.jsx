import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import  '../App.css';
import {useContext} from 'react';
import {SearchContext} from './SearchContext.jsx';

export default function Search(){
    const [Products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') || '';
    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("default");

    const {wishList,setWishList} = useContext(SearchContext);

    function  addToWishlist(product){
        return(
            setWishList((prev)=>{
                const exists = prev.some((item)=>item.id === product.id);

                if(exists){
                    return prev.filter((item)=>item.id !== product.id);

                }else{
                    return [...prev, product]}
                })
        )
    }
    function handleWishlist (){
          navigate(`/wishlist`);
    }

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                setError(null);

            const res = await fetch(`https://dummyjson.com/products?limit=10000`);
            if(!res.ok){
                throw new Error(`Server error! Statur:${res.status}`);
            }
            const Data = await res.json();
            setProducts(Data.products);
        }  catch(err){
            console.error("Fetch failed (Dev Log):", err.message);
            setError("Failed to load products. Please check you connection or try again later.");
        } finally{
            setLoading(false);
        }}
        fetchData();
    },[]);

    function handleCategory(category){
        return(
          setCategory(category)
        )
    }

    const filteredProducts = Products.filter((product)=>{
       const matchesSearch = product.title.toLowerCase().includes(query.toLowerCase());
       const matchCategory = category === "all"|| product.category ===category;

       return matchesSearch && matchCategory
})

    function HandleClick(id){
        navigate(`/CardsDetail/${id}`)
    }

    if(loading){
        return(
            <div>Loading products...</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
 }

 let sortedProducts = [...filteredProducts];

 if(sortOrder === "low"){
    sortedProducts.sort((a,b)=>a.price-b.price);
 }
 if(sortOrder === "high"){
    sortedProducts.sort((a,b)=>b.price-a.price);
 }

    return(
        <>
        <div style={{paddingTop:'70px', backgroundColor:'#514646', display:'flex',justifyContent:'space-evenly'}}>
            <h3>Categories</h3>
           <button className="category-btn" onClick={()=>handleCategory("all")}>ALL</button>
           <button className="category-btn" onClick={()=> handleCategory("beauty")}>Beauty</button>
           <button className="category-btn" onClick={()=>handleCategory("fragrances")}>Fragrances</button> 
           <button className="category-btn" onClick={()=>handleCategory("furniture")}>Furniture</button>
           <button className="category-btn" onClick={()=> handleCategory("groceries")}>Groceries</button>
           <button className="category-btn" onClick={()=>handleCategory("laptops")}>Laptops</button>
           <button className="category-btn" onClick={()=>handleCategory("smartphone")}>Smartphones</button>
           <button className="category-btn" onClick={()=>handleCategory("watches")}>Watches</button>
        </div>
        <div>
            <button onClick={()=>setSortOrder("low")}>Price: Low to High</button>
            <button onClick={()=>setSortOrder("high")}>Price: High to Low</button>
        </div>
        <button
        onClick={handleWishlist}
            >WishLists</button>
        <div style={{
            minHeight:'100vh',
            backgroundColor:'#b1abab',
            paddingTop:'80px',
            paddingBottom:'40px',
            paddingLeft:'24px',
            paddingRight:'24px',
            boxSizing:'border-box'
        }}>

        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))',
            gap:'24px',
            width:'100%',
            maxWidth:'1200px',
            margin:'0 auto'
        }}>

        {filteredProducts.length===0?(
            <div>
                <h2>No products found</h2>
                <p>Try searching with a different keyword</p>
            </div>
        ):(sortedProducts.map((product)=>(
          <div
            key={product.id}
            onClick={()=>HandleClick(product.id)}
            style={{
                backgroundColor:'#514c4c',
                borderRadius:'12px',
                overflow:'hidden',
                cursor:'pointer',
                display:'flex',
                flexDirection:'column',
                boxShadow:'0 4px 12px rgba(0,0,0,0.3)',
                transition:'transform 0.2s, boxShadow 0.2s'
            }}
            onMouseOver={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 20px rgba(0,0,0,0.4)'}}
            onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)'}}
          >
            <div style={{
                backgroundColor:'#cdc4c4',
                width:'100%',
                height:'200px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                padding:'16px',
                boxSizing:'border-box'
            }}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                        maxHeight:'160px',
                        maxWidth:'100%',
                        objectFit:'contain'
                    }}
                />
            </div>
            <div style={{
                backgroundColor:'#443e3e',
                padding:'14px 16px',
                borderRadius:'0 0 12px 12px',
                flex:1,
                display:'flex',
                flexDirection:'column',
                gap:'8px'
            }}>
                <h3 style={{
                    color:'white',
                    fontSize:'13px',
                    fontWeight:'500',
                    lineHeight:'1.4',
                    margin:0,
                    display:'-webkit-box',
                    WebkitLineClamp:2,
                    WebkitBoxOrient:'vertical',
                    overflow:'hidden'
                }}>
                    {product.title}
                </h3>
                <p style={{
                    color:'#e8a83a',
                    fontSize:'16px',
                    fontWeight:'700',
                    margin:0
                }}>
                    ${product.price}
                </p>
            </div>
            <button style={{height:'20px',background: wishList.some((item) => item.id === product.id) ? '#ff4d4d' : '#443e3e'}}
            onClick={(e)=>{
                e.stopPropagation();
                addToWishlist(product);
            }}
            >♡</button>
          </div>
       ) ))}

        </div>
        </div>
        </>
    )
}
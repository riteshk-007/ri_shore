import { createContext, useEffect, useState } from "react";
// import data from './Api'

export const ContexApp = createContext();



// eslint-disable-next-line react/prop-types
const AppConext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);



       // cart total amount price 
       useEffect(()=>{
        let subTotal = 0;
        cartItems.map((item) => subTotal += item.price * item.quantity)
        setCartSubTotal(subTotal)
        },[cartItems])
    const apidata = async () => {
        try {
            setLoading(true)
            let data = await fetch('https://fakestoreapi.com/products');
            let res = await data.json();
            setProducts(res)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    const limitset = async () => {
        try {
            let data = await fetch('https://fakestoreapi.com/products?limit=8');
            let res = await data.json();
            setLimit(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apidata()
        limitset()
    }, [])

        // add to cart 
    const handleAddToCart = (product, quantity)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=> p.id === product.id)
        if(index !== -1){
            items[index].quantity += quantity;
        }else{
            product.quantity = quantity;
            items = [...items, product]
        }
        setCartItems(items)
    }

    // remove to cart 

    const handleRemove = (product)=> {
        let items = [...cartItems]
        items = items.filter((p) => p.id !== product.id)
        setCartItems(items)
    }

    // quantity increment and decrement 

    const handleCartProductQuantity = (type, product)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=> p.id === product.id);
        if(type === 'inc'){
            items[index].quantity += 1;
        }else if(type === 'dec'){
            if( items[index].quantity === 1) return;
            items[index].quantity -= 1;
        }
        setCartItems(items)
    }
    
 


    return <ContexApp.Provider value={{
        products,
        loading,
        setLoading,
        limit,
        setLimit,
        cartItems,
        setCartItems,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemove,
        handleCartProductQuantity

    }}>
        
        {children} </ContexApp.Provider>

}

export default AppConext
import { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children})=> {

    //Shoppin cart increment
    const [count, setCount] = useState(0)
    
    //Product detail open close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product detail open close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product detail Show product
    const [productToShow, setProductToShow] = useState([])
    
    //Shopping Cart Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart order
    const [order, setOrder] = useState([])

    //Get  products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get products by cat
    const [searchByCat, setSearchByCat] = useState(null)

    
    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
        
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCat = (items, searchByCat) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCat.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCat) => {
        if (searchType  === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType  === 'BY_CATEGORY') {
            return filteredItemsByCat(items, searchByCat)
        }
        if (searchType  === 'BY_TITLE_AND_BY_CATEGORY') {
            return filteredItemsByCat(items, searchByCat).filter(item =>  item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }

    }

    useEffect(() => {
        if (searchByTitle && searchByCat) 
            setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items, searchByTitle, searchByCat))
        if (searchByTitle && !searchByCat) 
            setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCat))
        if (!searchByTitle && searchByCat) 
            setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCat))
        if (!searchByTitle && !searchByCat) 
            setFilteredItems(filterBy(null,items, searchByTitle, searchByCat))
    }, [items, searchByTitle, searchByCat])
   
    // useEffect(() => {
    //     if (searchByTitle) 
    //         setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    // }, [items, searchByTitle])

    // useEffect(() => {
    //     if (searchByCat) 
    //         setFilteredItems(filteredItemsByCat(items, searchByCat))
    // }, [items, searchByCat])

    // console.log('filtered items: ',filteredItems)
    // console.log('items: ',items)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCat,
            setSearchByCat,
            filteredItemsByCat
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
import { useContext, useEffect} from "react";
import Card from "../../Components/Card/index.jsx";
import Layout from "../../Components/Layout.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx";
import { ShoppingCartContext } from "../../Context/index.jsx";
import { useParams } from "react-router-dom";

function Cat() {
    const context = useContext(ShoppingCartContext)
    // console.log('Context: ',context.items)
    
    const {cat} = useParams()
    useEffect(() => {
        context.setSearchByCat(cat)
    }, [cat,context])
    // context.searchByCat = cat
    // console.log('cat',cat)
    const renderView = () => {
        if (context.Cat === 'all') {
            return context.items?.map(item => (<Card key={item.id} data={item} />))
        } else {
            if (context.searchByCat.length) {
                if (context.filteredItemsByCat?.length > 0) {
                    return (
                        // console.log('context',context)
                        context.filteredItems?.map(item => (<Card key={item.id} data={item} />))
                    )
                } else {
                    return (
                        <div>We dont have it</div>
                    )
                }   
            } else {
                return (
                    // console.log('context',context)
                    context.items?.map(item => (<Card key={item.id} data={item} />))
                )
            }
        }
    }
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4 focus:outline-none'>
                <h1 className='font-medium text-xl'>{cat.charAt(0).toUpperCase() + cat.slice(1)} Products</h1>
            </div>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView() }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Cat;
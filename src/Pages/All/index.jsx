import { useContext} from "react";
import Card from "../../Components/Card/index.jsx";
import Layout from '../../Components/Layout.jsx';
import { ShoppingCartContext } from "../../Context/index.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx";

function All() {
    const context = useContext(ShoppingCartContext);
    const renderView = () => {
        if (context.searchByTitle?.length) {
            // console.log('context search',context.searchByTitle)
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item => (<Card key={item.id} data={item} />))
                )
            } else {
                console.log(context.filteredItems)
                return (
                    <div>We dont have it</div>
                )
            }
        } else {
            return (
                context.items?.map(item => (<Card key={item.id} data={item} />))
            )
        }
    }
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4 focus:outline-none'>
                <h1 className='font-medium text-xl'>All Products</h1>
            </div>

            {/* <input 
                type='text' 
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4'
                onChange={(event) => context.setSearchByTitle(event.target.value)}>
            </input> */}
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView() }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default All;
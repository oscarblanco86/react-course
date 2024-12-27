import { useContext} from "react";
import Card from "../../Components/Card/index.jsx";
import Layout from "../../Components/Layout.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx";
import { ShoppingCartContext } from "../../Context/index.jsx";

function Home() {
    const context = useContext(ShoppingCartContext)
    // console.log('Context: ',context.items)
    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(
                    item => (
                        <Card key={item.id} data={item} />
                    )
                )
            )
        } else {
            // console.log(context.filteredItems)
            return (
                <div>We dont have it</div>
            )
        }
    }
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4 focus:outline-none'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>

            <input 
                type='text' 
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4'
                onChange={(event) => context.setSearchByTitle(event.target.value)}>
            </input>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home;
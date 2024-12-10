import { useContext } from "react";
import Layout from "../../Components/Layout.jsx";
import { ShoppingCartContext } from "../../Context/index.jsx";
import OrderCard from "../../Components/OrderCard/index.jsx";

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    // console.log("Order context:",context.order?.slice(-1)[0].products)
    return (
        <Layout>
            MyOrder
            <div className='flex flex-cp; w-80'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            // handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </Layout> 
    )
}

export default MyOrder;
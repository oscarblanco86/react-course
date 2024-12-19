import { useContext } from "react";
import Layout from "../../Components/Layout.jsx";
import OrdersCard from "../../Components/OrdersCard/index.jsx";
import { ShoppingCartContext } from "../../Context/index.jsx";
import { Link } from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    // console.log('order: ',context.order)
    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 mb-4'>                
                <h1 className='font-medium text-xl'>
                    My Orders
                </h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders;
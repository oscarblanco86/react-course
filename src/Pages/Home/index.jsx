import { useState, useEffect } from "react";
import Card from "../../Components/Card/index.jsx";
import Layout from "../../Components/Layout.jsx";

function Home() {
    const [items, setItems] = useState(null)
    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            // .then(response => console.log(response.json()))
            // .then(data => console.log(data))
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
        
    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    // eslint-disable-next-line react/jsx-key
                    items?.map(item => (<Card key={item.id} data={item} />))
                }
            </div>
        </Layout>
    )
}

export default Home;
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW', context.productToShow)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                {/* <div>X</div> */}
                
                <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeProductDetail()}
                ></XMarkIcon>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.images}
                    alt={context.productToShow.title}
                    />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
            {/* LO QUE YO INTENTE HACER */}
            {/* <div className='p-2 flex-col'>
                <div className='text-center text-lg font-black'>{context.productToShow.title}</div>
                <div className='text-sm font-light'>
                    {context.productToShow.description}, 
                </div>
                <img className='w-2/3 content-center px-2' src={context.productToShow.images[0]} alt={context.productToShow.title} />
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-4'>{context.productToShow.category.name}</span>
                <span className='text-lg font-medium'>${context.productToShow.price}</span> 
            </div> */}
        </aside>
    )
}

export default ProductDetail
import React from 'react'

function ProductList({data}) {


  return (
    <div>
    {
         data.map((e)=>{
                        return    <div className="product-card" key={e.id}>
                        <img src={e.imageUrl} alt="No content" />
                        <h2>{data.name}</h2>
                        <p>{e.description}</p>
                        <p className='card-item-price'>Price: ${e.price}</p>
                        <p className='card-item-cat'>Category: computers</p>
                        <div className="product-card-buttons">
                            <button>Update Product</button>
                            <button>Delete Product</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    })
    }
   </div>
  )
}

export default ProductList
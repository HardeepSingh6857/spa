import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const param = useParams();
    return (
        <>
            <h1>Product's Details!!!</h1>
            <p>{param.productId}</p>
            <p><Link to='..'>Back</Link></p>

        </>
    )
}

export default ProductDetailPage
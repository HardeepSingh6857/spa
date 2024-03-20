import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>The Products Page</div>
            <p>Go back to
                <Link to='/'> the home page.</Link>
            </p>
        </>
    )
}

export default Products
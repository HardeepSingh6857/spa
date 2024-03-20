import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <h3>The Products Page</h3>
            <p>Go back to
                <Link to='/'> the home page.</Link>
            </p>
        </>
    )
}

export default Products
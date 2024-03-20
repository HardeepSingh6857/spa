import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h3>My Home Page</h3>
            <p>Go to
                <Link to='/products'> the list of products</Link>
            </p>
        </>
    )
}

export default Home
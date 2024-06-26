import React from 'react'
import MainNavigation from '../components/MainNavigation'

const Error = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h2>An error occurred!</h2>
                <p>Could not find this page!</p>
            </main>
        </>
    )
}

export default Error
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <h2>Root Layout</h2>
            <Outlet />
        </>
    )
}

export default Root
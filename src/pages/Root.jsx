import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Root = () => {
    return (
        <>
            <h2>Root Layout</h2>
            <MainNavigation />
            <Outlet />
        </>
    )
}

export default Root
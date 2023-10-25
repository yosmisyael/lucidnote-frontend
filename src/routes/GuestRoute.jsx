import { Outlet, Navigate } from 'react-router-dom'

export default function GuestRoute () {
    const token = localStorage.getItem('token')

    return (
        !token ? <Outlet /> : <Navigate to='/users' />
    )
}
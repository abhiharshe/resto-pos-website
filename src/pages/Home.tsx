import { useRouter } from '@tanstack/react-router'
import React from 'react'

const Home = () => {
    const router = useRouter();
    const state = Route.useLoaderData()
    return (
        <div>Home</div>
    )
}

export default Home
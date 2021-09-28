import React from 'react'
import CardComp from '../components/CardComp'
import { useFetch } from '../utils/functions'

const Dashboard = () => {

    const {blogList, isLoading} = useFetch();

    return (
        <div>
            {
                isLoading ? <p>Loading...</p> : (
                    blogList.map((blog) => {
                        return <CardComp blog={blog} />
                    })
                ) 
            }
            
        </div>
    )
}

export default Dashboard

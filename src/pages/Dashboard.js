import React from 'react'
import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Sidebar from '../components/sidebar'

function Dashboard() {
    return (
        <div className="bg-gray-background">
            <Header/>
            <div className="grid grid-cols-3 mx-auto gap-4 max-w-screen-lg">
                Dashboards
                <Timeline />
                <Sidebar />
            </div>        
        </div>
    )
}

export default Dashboard

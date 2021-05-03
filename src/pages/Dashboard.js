import React from 'react'
import Header from './Header'
// import Timeline from './pages/Timeline'
// import Sidebar from './Sidebar'

function Dashboard() {
    return (
        <div className="bg-gray-background">
            <Header/>
            <div className="grid">
                Dashboards
                {/* <Timeline />
                <Sidebar /> */}
            </div>        
        </div>
    )
}

export default Dashboard

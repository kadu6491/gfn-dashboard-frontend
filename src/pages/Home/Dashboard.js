import React, {useEffect} from 'react'

import {useHistory} from 'react-router-dom'

import api from '../../api'

import DashboardList from '../../components/home/DashboardList'

const Dashboard = () => {
    let user = localStorage.getItem("user")
    let history = useHistory()

    console.log(user)
    if (user == null)
    {
        history.push("/")
    }

    useEffect(() => {
        api.get('/info/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(resp => {
            console.log(resp.data)
        })
    }, [])
    return (
        <div>
            <DashboardList name={"Peter"}/>
        </div>
    )
}

export default Dashboard

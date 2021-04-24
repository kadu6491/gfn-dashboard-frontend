import React, {useEffect} from 'react'

import {useHistory} from 'react-router-dom'

import api from '../../api'

import DashboardList from '../../components/dashboard/DashboardList'
import Body from '../../navigation/Body'

const Dashboard = () => {
    let token = localStorage.getItem("token")
    let history = useHistory()

    if (token === null || token === undefined)
    {
        history.push("/")
    }

    useEffect(() => {
        api.get('/info/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            console.log(resp.data.expiration)
        })
    }, [])
    return (
        <div>
            <Body 
                main={<DashboardList name="Peter"/>}
                num={0}
                title="Dashboard"
            />
            {/* <DashboardList name={"Peter"}/> */}
        </div>
    )
}

export default Dashboard

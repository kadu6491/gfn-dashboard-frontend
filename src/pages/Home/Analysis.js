import React from 'react'
import Body from '../../navigation/Body'

import {useHistory} from 'react-router-dom'

const Analysis = () => {
    let token = localStorage.getItem("token")
    let history = useHistory()

    if (token === null || token === undefined)
    {
        history.push("/")
    }
    return (
        <div>
            <Body 
                main={<h6>This is Analysis</h6>}
                num={1}
                title="Analysis"
            />
        </div>
    )
}

export default Analysis

import { Button } from '@material-ui/core'
import React from 'react'

import StyledTableCell from './StyledTableCell'
import StyledTableRow from './StyledTableRow'

import BorderColorIcon from '@material-ui/icons/BorderColor';

const DisplayCell = (props) => {
    return (
        
        <StyledTableRow key={props.index}>
            <StyledTableCell component="th" scope="row">
                {props.id}
            </StyledTableCell>
            <StyledTableCell>{props.customer}</StyledTableCell>
            <StyledTableCell>{props.date}</StyledTableCell>
            <StyledTableCell>{props.total}</StyledTableCell>
            <StyledTableCell>{props.method}</StyledTableCell>
            <StyledTableCell>{props.status}</StyledTableCell>

            <StyledTableCell align="right">
                <Button>
                    <BorderColorIcon style={{color: "white"}} />
                </Button>
            </StyledTableCell>
        </StyledTableRow>
       
    )
}

export default DisplayCell

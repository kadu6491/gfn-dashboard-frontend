import React from 'react'
import DisplayCell from './DisplayCell'

const RowContent = (props) => {
    let page = props.page
    let rowsPerPage = props.rowsPerPage
    return (
        props.RowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            row.status === props.orderStatus
            ? 
            <DisplayCell 
                index={index} 
                id={row.id}
                customer={row.customer}
                date={row.date}
                total={row.total}
                method={row.method} 
                status={props.status}
            /> 
            : null
        ))
    )
}

export default RowContent

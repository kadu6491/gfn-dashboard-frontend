import React from 'react'

import MainTable from '../table/MainTable';
import RowContent from '../table/RowContent';
import RowData from './RowData';

import Completed from '../buttons/Completed';

import useStyle from './style'

const CompletedOrder = () => {
    const classes = useStyle()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, RowData.length - page * rowsPerPage);

    return (
        <div className={classes.orrderTableDiv}>
            <MainTable 
                rows={RowData}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                TableContent={
                    <RowContent 
                        RowData={RowData}
                        orderStatus="Completed"
                        page={page}
                        rowsPerPage={rowsPerPage}
                        status={<Completed />}
                    />
                }
                emptyRows={emptyRows}
            />
        </div>
    )
}

export default CompletedOrder

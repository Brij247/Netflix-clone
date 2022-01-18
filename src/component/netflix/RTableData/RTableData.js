import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {trending} from '../../../Urls'
import axios from '../../../axios'
import '../RTableData/RTabledata.css'

const columns = [
  { field: 'id', headerName: 'Movie ID' },
 { field: 'original_title', headerName: 'Title', width: 200},
 { field: 'popularity', headerName: 'Popularity', width: 200 },
 { field: 'vote_average', headerName: 'Vote', width: 200 },
 { field: 'media_type', headerName: 'Media', width: 200 },
 { field: 'release_date', headerName: 'Released On', width: 200 }
]

const RTableData = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    axios.get(trending).then(response=>{
        console.log(response.data);
        setTableData(response.data.results)
    }).catch(err=>{
        //alert('network Error')
    })
}, [])

  console.log(tableData)

  return (
    <div className='RTabledata' >
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default RTableData
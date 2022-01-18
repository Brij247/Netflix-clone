import React,{useEffect,useState} from 'react';
import {trending} from '../../../Urls'
import axios from '../../../axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../RTable/RTable.css'



function RTable() {

    const[data,setData]=useState([])
    const[search,setSearch]=useState("")


    const getTableData=async () =>{
        try {
            const Tdata=await axios.get(trending)
            console.log(Tdata.data.results);
            setData(Tdata.data.results)
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getTableData()
        
    }, [])
    return (
        <div className='table-cont'>
            <h3>Data Table</h3>
         
            {/* <input type="text"
            placeholder="Enter movie name"
            onChange={(e) =>{
                console.log("Yes");
                setSearch(e.target.value);
            }} /> */}
            {/* {data
            .filter((item) =>{
                if(search == ""){
                    return item;
                }else if (item.title.toLowercase().includes(search.toLowercase())) {
                    return item;

                }
            })
            .map((item) =>{
                return (<p>{item.title}-{item.id}</p>);
            })} */}

<TableContainer className='table-container' component={Paper}>
      <Table >
        <TableHead>
          <TableRow className='head' >
          
            <TableCell >Movie ID</TableCell>
            <TableCell align="right" >Movie Name</TableCell>
            <TableCell align="right">Movie Language</TableCell>
            <TableCell align="right">Movie Popularity</TableCell>
            <TableCell align="right">Movie Vote Avg</TableCell>
            <TableCell align="right">Movie Type</TableCell>
            <TableCell align="right">Movie Released on</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {data
            
            .map((item) =>{
                return (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.original_title||item.title}</TableCell>
              <TableCell align="right">{item.original_language}</TableCell>
              <TableCell align="right">{item.popularity}</TableCell>
              <TableCell align="right">{item.vote_average}</TableCell>
              <TableCell align="right">{item.media_type}</TableCell>
              <TableCell align="right">{item.release_date}</TableCell>
            </TableRow>
                );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
        </div>
    )
}

export default RTable

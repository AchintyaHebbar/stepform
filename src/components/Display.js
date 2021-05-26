import React, { useContext } from 'react'
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from '@material-ui/core'
import { multiStep } from '../Content';
export default function Display() {
    const {finalData}=useContext(multiStep);
    return (
        <div>
            <TableContainer style={{display:'flex',justifyContent:'center'}}>
            <Table border="1" style={{width:'70%',justifyContent:'center'}}size="small" aria-label="table">
                <TableHead>
                    <TableRow style={{backgroundColor:"blue",color:"white"}}>
                        
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {finalData.map(data=>(
                      <TableRow>
                         
                         <TableCell>{data.Firstname}</TableCell>
                         <TableCell>{data.Lastname}</TableCell>
                         <TableCell>{data.Age}</TableCell>
                         <TableCell>{data.City}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

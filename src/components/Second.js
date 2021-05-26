import React,{useContext,useState} from 'react'
import { Button,TextField } from "@material-ui/core";
import { multiStep } from '../Content';
import './Third.css'
import Select from 'react-select'
export default function Second() {
    const {setStep,userData,setUserData}=useContext(multiStep)
    const data = [
        {
            value:1,
            label:"Leader 1"
        },
        {
            value:2,
            label:"Leader 2"
        },
        {
            value:3,
            label:"Leader 3"
        }
    ]
    const data1 = [
        {
            value:1,
            label:"Member 1"
        },
        {
            value:2,
            label:"Member 2"
        },
        {
            value:3,
            label:"Member 3"
        }
    ]
    const[selectvalue,setSelectvalue]=useState(null);
    const handleChange = obj => {
        setSelectvalue(obj);
    }
    const[selectvalue1,setSelectvalue1]=useState(null);
    const handleChange1 = obj1 => {
        setSelectvalue1(obj1);
    }
    return (
      <div>
        <div className="dd">
            <Select placeholder="Project leader"  
                    value={selectvalue}
                    options={data}        
                    onChange={handleChange}/> 
        </div>
        <div className="dd" >
            <Select placeholder="Project members"
                   value={selectvalue1}
                   options={data1}        
                   onChange={handleChange1}/> 
        </div>
        <div>
            <TextField placeholder="Age" value={userData['Age']}onChange={(e)=>setUserData({...userData,"Age":e.target.value}) }margin="dense" variant="outlined" color="secondary"/>
        </div>
        
        <div>
            <TextField placeholder="City" value={userData['City']}onChange={(e)=>setUserData({...userData,"City":e.target.value})} margin="dense" variant="outlined" color="secondary"/>
        </div>
      
      
        <div className="btn">
            <Button variant="contained" onClick={()=>setStep(1)} color="primary" >Back</Button><span>  </span>
            <Button variant="contained" onClick={()=>setStep(3)} color="secondary" >Next</Button>
        </div>
      </div>    
    )
}

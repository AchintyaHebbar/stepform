import React,{useContext,useState} from 'react'
import { Button,TextField } from "@material-ui/core";
import { multiStep } from '../Content';
import './Third.css'
import '../App.css'
import Select from 'react-select'

export default function First(){
    const {setStep,userData,setUserData}=useContext(multiStep)
    
    const data = [
        {
            value:1,
            label:"Traditional"
        },
        {
            value:2,
            label:"Agile"
        }
    ]
    const[selectvalue,setSelectvalue]=useState(null);
    const handleChange = obj => {
        setSelectvalue(obj);
    }
 
    return (
      <div>
         <div className="dd">
             <Select placeholder="Project Type"
                     value={selectvalue}
                     options={data}        
                     onChange={handleChange}/> 
         </div>
        
        <div>
       
         <TextField placeholder="Firstname" value={userData['Firstname']}onChange={(e)=>setUserData({...userData,"Firstname":e.target.value})} margin="dense" variant="outlined" color="secondary"/>
      
        </div>
        <div>
            
            <TextField placeholder="Lastname" value={userData['Lastname']}onChange={(e)=>setUserData({...userData,"Lastname":e.target.value})}  margin="dense" variant="outlined" color="secondary"/>
          
        </div>
        
        <div className="btn">
            <Button variant="contained" onClick={()=>setStep(2)} color="secondary">Next</Button><span>  </span>
        </div>
        
        
      </div>    
    )
}

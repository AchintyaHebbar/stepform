import React,{useContext} from 'react'
import { Button,TextField } from "@material-ui/core";
import { multiStep } from '../Content';
import './Third.css'
import Display from './Display'




export default function Third() {
    const {setStep,submit,finalData}=useContext(multiStep)
    return (
      <div>
           {finalData.length > 0 ? <Display/> : ''}
        <div className="btn">
            <Button variant="contained" onClick={()=>setStep(2)}  color="primary">Back</Button><span>  </span>
            <Button variant="contained" onClick={submit}  color="secondary">Submit</Button>
        </div>
        
      </div>    
    )
}

import logo from './logo.svg';
import './App.css';
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { Stepper,StepLabel,Step  } from "@material-ui/core";
import {multiStep} from './Content';
import { useContext,useState } from 'react';
import Display from './components/Display'
export default function App() {
  const {currentStep,finalData}=useContext(multiStep);


  function show(step)
  { console.log(step)
    switch(step){
        case 1:
          return <div><First/>
      </div>    
        case 2:
          return <Second/>
        case 3:
          return <Third/>
    }

  }
  return (
    <div className="App">
      <h1>Simple Step Form</h1>
      <header className="Header">
      <div className="Cstep">
    
      <Stepper style={{width:'20%'}} activeStep={currentStep-1} orientation='horizontal' >
        <Step> 
             <StepLabel>
              Step 1
            </StepLabel>
          
        </Step>  
        <Step>
             <StepLabel>
               Step 2
             </StepLabel>
        </Step>  
        <Step>
             <StepLabel>
               Step 3
             </StepLabel>
        </Step>      
        </Stepper>
        </div>
           {show(currentStep)}
         <br/>
        
           
     </header>
     
    </div>
  );
}


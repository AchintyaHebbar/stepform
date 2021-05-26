
import App from './App'
import React, {  useState } from "react";
export const multiStep = React.createContext();
 const Content = () => {
     const[currentStep,setStep]=useState(1);
     const[userData,setUserData]=useState([]);
     const[finalData,setFinalData]=useState([]);


    function submit()
    {
        setFinalData(finalData=>[...finalData,userData]);
        setUserData('');
        setStep(1);
    }

    return (
        <div>
            <multiStep.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submit}}>
                <App/>
            </multiStep.Provider>
        </div>
    )
}
export default Content;
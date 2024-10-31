import { useState } from 'react'
import './AddApp.css'
import { useEffect } from 'react';

const AddApp = () => {

    const[advice , setAdvice] = useState("Please click the button to get advice")
    const[count,setCount]= useState(0);

  async function getAdvice(){    //api aale delay irukkum atal async function podanum
    const res = await fetch('https://api.adviceslip.com/advice') ; //api url
    //   console.log(res);
    const data = await res.json();  //api data fetch pannum 
    //   console.log(data);

      setAdvice(data.slip.advice);  //api data set pannum
      setCount ((count) => count + 1);  //count pannum
    }
useEffect(function(){
    getAdvice();
},[]);

  return (
    <div>
     <h3>{advice}</h3>
     <button onClick={getAdvice}>Get Advice</button>
    <Counter count={count}/>
    </div>
  )
}

function Counter(props){
    return(
        <p>
        You have read <b>{props.count}</b> pieces of advice
     </p>
    )
}

export default AddApp

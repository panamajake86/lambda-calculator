import React from "react";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbersData } from '../../../data' 
import {NumberButton} from "./NumberButton"
//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = React.useState(numbersData);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {number.map((num, i)=>{
        return <NumberButton number={num} key={i} />
      })}

    </div>
  );
};

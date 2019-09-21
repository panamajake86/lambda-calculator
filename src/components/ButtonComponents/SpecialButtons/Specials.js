import React from "react";
import { specialsData } from '../../../data'; 
import {SpecialButton} from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = React.useState(specialsData);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {special.map((spec, i)=>{
        return <SpecialButton value={spec} key={i} />
      })}
    </div>
  );
};

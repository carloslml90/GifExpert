import { useState } from "react";
import Proptypes from 'prop-types';



export const AddCategory=({onNewCategory})=>{

    const [inputValue,setInputValue]=useState(' ')
    //console.log(inputValue);


        const onInputChange=(event) =>{
        setInputValue(event.target.value)
        }

        const onSubmit =(event)=>{
            event.preventDefault();
            if(inputValue.trim().length <=4 ) return;
            onNewCategory(inputValue.trim());
            setInputValue("");//clear our input box after added an element to categories 
  
        }

                return(
                
                
                    <form  onSubmit={(event)=>onSubmit(event)} aria-label="form">

                        <input
                        type="text"
                        value={inputValue}
                        placeholder="Looking for a serie"
                        onChange={(event)=>onInputChange(event)}
                        
                        />
                    </form>
                
                )

} 

AddCategory.propTypes= {

   onNewCategory: Proptypes.func,

}
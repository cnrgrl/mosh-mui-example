import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';




const Counter=(props)=>{
 

    const getBadgeClasses=()=> {
        let classes = "badge m-2 badge-";
        classes += props.value===0 ? "warning":"primary";
        return classes;
    }

    const formatCount=()=>{
   
        return props.value === 0 ? 'Zero' : props.value;
    }
        
        return ( 
        <React.Fragment>

            <hr/>
     

            <span className={getBadgeClasses()}> {formatCount()}</span>
            <Button variant="outlined" 
            color="primary" 
            onClick={()=>props.onIncrement(props.counter.id)}>
                Increment
            </Button>
            
            <Button   
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={()=>props.onDelete(props.counter.id)} >
                DElete
            </Button>
      
        </React.Fragment> );
    





   
}
 
export default Counter;
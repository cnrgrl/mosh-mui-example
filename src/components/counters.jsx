import React from 'react';
import Counter from './counter';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';

const Counters=(props)=>{
 
    
       
        return (
        <div>
            
                <Button
                variant="outlined"
                color="secondary"
                startIcon={<ReplayIcon />}
                onClick={()=>props.onReset()} 
                className="btn btn-primary btn-sm"
                >
                        RESET

                </Button>

           
           {props.counters.map(counter=>(
            <Counter 
                value={counter.value}
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                onReset={props.onReset}

                key={counter.id}
                counter={counter}
                />
                ))} 
        </div>  
        );

}
 
export default Counters;
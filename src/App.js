

import './App.css';
import Counters from './components/counters';
import './components/navbar'
import Navbar from './components/navbar';
import React,{useState} from 'react';


const  App=(props)=> {

    const [counters, setCounters]=useState([
        {id: 1, value:0},
        {id: 2, value:0 },
        {id: 3, value:0},
        {id: 6, value:0}])
       
        
        const handleReset=()=>{
       
        // var counters = counters.map(c=>{return c.value=0})
           setCounters(
                counters.map(counter=>({...counter, value:0 }))

           );
           
        // console.log(newCounters)
        // setCounters(counters)
        // console.log(counters)   
    }

    
    const handleIncrement = (counterId) => {
  
        setCounters(
            counters.map(counter=>(counter.id===counterId ? ({...counter, value:counter.value+1} ):counter))

       );
        console.log(counters)

    
    };
    const handleDelete=(counterId)=>{
        console.log("delete func called")
        
        setCounters(counters.filter(counter=>counter.id !== counterId));
        // const counters=this.state.counters.filter(c=>c.id !== counterId );

    };
   

    

        return ( 
        <div className="App">
            <Navbar 
                 totalIncrement={counters.filter(c=> c.value>0).length}
            />
            <Counters 
               
                onIncrement={handleIncrement}
                onDelete={handleDelete}
                onReset={handleReset}
                counters={counters}
         
            />
                

      </div> );
 
}
export default App;
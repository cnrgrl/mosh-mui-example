import React from 'react';
import Counter from './counter';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import CardComp from './card';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';



const Counters=(props)=>{

    
       
        return (
                


        <Container >
            <Card elevation={3}  >

            <CardHeader 
                    action={
                        <IconButton>
                                <AvTimerIcon/>
                        </IconButton>
                    }
                    title={"COUNT UP!"}
                    subheader={"click on INCREMENT"}
                
                >
                    
                </CardHeader>
                
                <Button
                variant="outlined"
                color="secondary"
                startIcon={<ReplayIcon />}
                onClick={()=>props.onReset()} 
                className="btn btn-primary btn-sm"
                >
                        RESET

                </Button>

           
           {props.counters.map(counter=>(<Grid container
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="center"        >
                    <Grid item md={12} xs={12} >
                            <Counter 
                value={counter.value}
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                onReset={props.onReset}

                key={counter.id}
                counter={counter}
                />
                    </Grid>
                
            </Grid>
            
                ))} 
                <CardComp/>
                </Card>
        </Container>  
        );

}
 
export default Counters;
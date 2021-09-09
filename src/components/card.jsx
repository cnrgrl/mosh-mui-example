import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import { Box } from '@material-ui/core';


const CardComp = () => {
    return ( 
        <div>
            <Card spacing={3}>
                <CardHeader
                    action={
                        <IconButton display="flex">
                         Counter Description
                        </IconButton>
                    }
                
                >
                    
                </CardHeader>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque aliquid reprehenderit, commodi illo et quisquam cumque numquam? Veritatis minus, sunt corrupti quia sequi totam ipsam quam! Repudiandae, blanditiis atque.

                
            </Card> 

            <Box>
            </Box>       
        </div>
     );
}
 
export default CardComp;
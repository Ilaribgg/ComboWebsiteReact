import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Fight(props) {
    return (
    	<Grid spacing={2} container>
    	{
    		props.fight.map(fight => {
    			return (
    				<Grid item key={fight.id}>
    				<Card style ={{ maxWidth: 350, minWidth: 350} }>
    					<CardContent>
    					<Typography>{fight.character}</Typography>
    					<Typography>{fight.combo}</Typography>
    					<Typography>{fight.starter}</Typography>
    					</CardContent>
    				</Card>
    				</Grid>
    			)

    		}

    		)
    	}

    	</Grid>
        );

}

export default Fight;
       
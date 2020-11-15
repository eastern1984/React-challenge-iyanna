import React from 'react';
import {Card, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        height: 450,
    },
});

interface TopRatingsProps {

}

const TopRatings: React.FC<TopRatingsProps> = props => {
    const classes = useStyles();
    return (<Card className={classes.card}>

        </Card>
    );
};

export default TopRatings;
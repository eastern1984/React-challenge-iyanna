import React from 'react';
import {Card, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        height: 170,
    },
});

interface TopStocksProps {

}

const TopStocks: React.FC<TopStocksProps> = props => {
    const classes = useStyles();
    return (<Card className={classes.card}>

        </Card>
    );
};

export default TopStocks;
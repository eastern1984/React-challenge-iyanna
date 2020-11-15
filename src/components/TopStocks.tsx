import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface TopStocksProps {

}

const TopStocks: React.FC<TopStocksProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default TopStocks;
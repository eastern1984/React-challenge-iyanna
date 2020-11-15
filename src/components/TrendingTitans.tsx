import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface TrendingTitansProps {

}

const TrendingTitans: React.FC<TrendingTitansProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default TrendingTitans;
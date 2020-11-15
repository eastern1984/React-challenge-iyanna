import React from 'react';
import {Card, makeStyles} from "@material-ui/core";
import BuysFilter from "./StrongBuys/BuysFilter";
import StrongBuysCard from "./StrongBuys/StrongBuysCard";

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
            <BuysFilter />
            <StrongBuysCard />
        </>
    );
};

export default TrendingTitans;
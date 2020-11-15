import React from 'react';
import {Card, Grid, makeStyles} from "@material-ui/core";
import BuysFilter from "./BuysFilter";
import StrongBuysCard from "./StrongBuysCard";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface StrongBuysProps {

}

const StrongBuys: React.FC<StrongBuysProps> = props => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} direction={"column"}>
            <Grid item>
                <BuysFilter />
            </Grid>
            <Grid item>
                <StrongBuysCard />
            </Grid>
        </Grid>
    );
};

export default StrongBuys;
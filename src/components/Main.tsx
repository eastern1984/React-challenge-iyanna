import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import TopStocks from "./TopStocks";
import TopRatings from "./TopRatings";
import TrendingTitans from "./TrendingTitans";
import StrongBuys from "./StrongBuys/StrongBuys";
import Activity from "./ActivityTimeline/Activity";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface MainProps {

}

const Main: React.FC<MainProps> = props => {
    const classes = useStyles();
    return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TrendingTitans />
                    <StrongBuys />
                    <Activity />
                </Grid>
                <Grid item xs={3}>
                    <TopStocks />
                    <TopRatings />
                </Grid>
            </Grid>
    );
};

export default Main;
import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import TopStocks from "./TopStocks";
import TopRatings from "./TopRatings";
import TrendingTitans from "./TrendingTitans";
import StrongBuys from "./StrongBuys/StrongBuys";
import Activity from "./ActivityTimeline/Activity";

const useStyles = makeStyles({
    main: {
        margin: "70px 0 0 80px",
    },
    mainContainer: {
        margin: "auto",
    },
});

interface MainProps {

}

const Main: React.FC<MainProps> = props => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={6}>
                    <Grid container spacing={2} direction={"column"}>
                        <Grid item>
                            <TrendingTitans />
                        </Grid>
                        <Grid item>
                            <StrongBuys />
                        </Grid>
                        <Grid item>
                            <Activity />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={2} direction={"column"}>
                        <Grid item>
                            <TopStocks />
                        </Grid>
                        <Grid item>
                            <TopRatings />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Main;
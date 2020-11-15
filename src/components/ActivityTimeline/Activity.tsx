import React from 'react';
import {Card, Grid, makeStyles} from "@material-ui/core";
import ActivityFilter from "./ActivityFilter";
import ActivityCard from "./ActivityCard";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface ActivityProps {

}

const Activity: React.FC<ActivityProps> = props => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} direction={"column"}>
            <Grid item>
                <ActivityFilter />
            </Grid>
            <Grid item>
                <ActivityCard />
            </Grid>
        </Grid>
    );
};

export default Activity;
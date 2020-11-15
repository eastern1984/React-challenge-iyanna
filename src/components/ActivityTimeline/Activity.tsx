import React from 'react';
import {Card, makeStyles} from "@material-ui/core";
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
    return (<>
            <ActivityFilter />
            <ActivityCard />
        </>
    );
};

export default Activity;
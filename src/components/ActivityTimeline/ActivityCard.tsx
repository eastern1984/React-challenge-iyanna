import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface ActivityCardProps {

}

const ActivityCard: React.FC<ActivityCardProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default ActivityCard;
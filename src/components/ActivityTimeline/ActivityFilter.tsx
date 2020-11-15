import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface ActivityFilterProps {

}

const ActivityFilter: React.FC<ActivityFilterProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default ActivityFilter;
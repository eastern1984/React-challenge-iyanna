import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface TopRatingsProps {

}

const TopRatings: React.FC<TopRatingsProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default TopRatings;
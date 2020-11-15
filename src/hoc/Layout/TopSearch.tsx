import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface TopSearchProps {

}

const TopSearch: React.FC<TopSearchProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default TopSearch;
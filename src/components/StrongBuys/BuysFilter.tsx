import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface BuysFilterProps {

}

const BuysFilter: React.FC<BuysFilterProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default BuysFilter;
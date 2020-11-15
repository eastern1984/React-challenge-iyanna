import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface StrongBuysCardProps {

}

const StrongBuysCard: React.FC<StrongBuysCardProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default StrongBuysCard;
import React from 'react';
import {Card, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface StrongBuysProps {

}

const StrongBuys: React.FC<StrongBuysProps> = props => {
    const classes = useStyles();
    return (<Card>

        </Card>
    );
};

export default StrongBuys;
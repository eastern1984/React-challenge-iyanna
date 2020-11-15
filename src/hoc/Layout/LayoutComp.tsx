import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface LayoutProps {

}

const LayoutComp: React.FC<LayoutProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default LayoutComp;
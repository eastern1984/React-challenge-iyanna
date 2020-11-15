import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface MainProps {

}

const Main: React.FC<MainProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default Main;
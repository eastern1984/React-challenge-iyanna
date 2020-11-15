import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface TopIconProps {

}

const TopIcon: React.FC<TopIconProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default TopIcon;
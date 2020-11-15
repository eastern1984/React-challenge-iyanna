import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = props => {
    const classes = useStyles();
    return (<>

        </>
    );
};

export default Sidebar;
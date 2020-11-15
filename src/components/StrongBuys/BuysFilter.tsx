import React from 'react';
import {makeStyles, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
});

interface BuysFilterProps {

}

const BuysFilter: React.FC<BuysFilterProps> = props => {
    const classes = useStyles();
    return (
        <Select value={"Strong buys"} disableUnderline>
            <MenuItem value={"Strong buys"}><b>Strong buys</b></MenuItem>
        </Select>
    );
};

export default BuysFilter;
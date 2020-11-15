import React from 'react';
import {makeStyles, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles({
    select: {
        color: 'grey'
    },
});

interface ActivityFilterProps {

}

const ActivityFilter: React.FC<ActivityFilterProps> = props => {
    const classes = useStyles();
    return (
        <>
            <span><b>Activity Timeline - </b></span>
            <Select value={"General"} className={classes.select} disableUnderline>
                <MenuItem value={"General"}><b>General</b></MenuItem>
            </Select>
        </>
    );
};

export default ActivityFilter;
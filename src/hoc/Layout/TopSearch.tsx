import React from 'react';
import {IconButton, Input, InputAdornment, makeStyles, OutlinedInput} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    input: {
        borderRadius: '50px',
        height: '40px',
        paddingRight: 0,
        color: 'grey',
    },
    icon: {
        color: "rgb(0 114 239 / 1)",
    }
});

interface TopSearchProps {

}

const TopSearch: React.FC<TopSearchProps> = props => {
    const classes = useStyles();
    return (<>
            <OutlinedInput
                className={classes.input}
                placeholder={'Search...'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon className={classes.icon}/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </>
    );
};

export default TopSearch;
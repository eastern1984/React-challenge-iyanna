import React from 'react';
import {Badge, createStyles, IconButton, makeStyles, Theme, withStyles} from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -14,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);

const useStyles = makeStyles({
    button: {
        backgroundColor: "rgb(0 114 239 / 1)",
        color: 'white',
    },
});

interface TopIconProps {

}

const TopIcon: React.FC<TopIconProps> = props => {
    const classes = useStyles();
    return (<>
            <IconButton className={classes.button}>
                <StyledBadge badgeContent={'+23'} color="secondary">
                    <NotificationsNoneIcon />
                </StyledBadge>
            </IconButton>
        </>
    );
};

export default TopIcon;
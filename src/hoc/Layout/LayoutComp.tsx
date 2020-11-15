import React from 'react';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import MailIcon from '@material-ui/icons/Mail';
import TopSearch from "./TopSearch";
import TopIcon from "./TopIcon";

const useStyles = makeStyles({
    appBar: {
        paddingLeft: "80px",
        backgroundColor: "white",
        color: 'grey',
        boxShadow: 'none'
    },
    drawer: {
    },
    drawerPaper: {
        textAlign: "center",
        backgroundColor: "rgb(0 114 239 / 1)",
        border: '0',
        width: '80px',
    },
    listItem: {
        paddingLeft: '10px'
    },
    icons: {
        color: 'white',
        display: 'block',
        textAlign: 'center',
        height: '80px'
    },
    icon: {
        fontSize: '2.5rem',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

interface LayoutProps {

}

const LayoutComp: React.FC<LayoutProps> = props => {
    const classes = useStyles();
    const iconList = [
        <InboxIcon className={classes.icon}/>,
        <MailIcon className={classes.icon}/>,
        <AccessibilityIcon className={classes.icon}/>,
        <AccountBalanceIcon className={classes.icon}/>,
        <AddAPhotoIcon className={classes.icon}/>,
        <AddShoppingCartIcon className={classes.icon}/>,
        <AddIcCallIcon className={classes.icon}/>,
        <AddToQueueIcon className={classes.icon}/>,
        <AirplanemodeActiveIcon className={classes.icon}/>,
        ];

    return (<>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" noWrap>
                        Welcome back to Terminal, John Doe.
                    </Typography>

                    <TopSearch/>
                    <TopIcon/>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={true}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    {iconList.map((component, index) => (
                        <ListItem button key={index} className={classes.listItem}>
                            <ListItemIcon className={classes.icons}>{component}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {props.children}
        </>
    );
};

export default LayoutComp;
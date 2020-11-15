import React from 'react';
import {Avatar, Card, CardContent, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const TITANS = ['John Williams', 'John Williams', 'John Williams', 'John Williams', 'John Williams', 'John Williams' ];

const useStyles = makeStyles({
    card: {
        height: 100,
        padding: '10px'
    },
    title: {
        fontSize: '14px',
        marginBottom: '8px'
    },
    avatar: {
        margin: 'auto',
        border: '2px solid rgb(0 114 239 / 1)'
    },
    name: {
        marginTop: '8px',
        fontSize: '10px',
        color: 'grey',
        textAlign: 'center'
    },
    titans: {
        display: 'inline-block',
        width: '95%'
    },
    nextIcon: {
        display: 'inline-block'
    },
    button: {
        width: '10px',
        color: "rgb(0 114 239 / 1)",
    },
});

interface TrendingTitansProps {

}

const TrendingTitans: React.FC<TrendingTitansProps> = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography variant="h6" noWrap className={classes.title}>
                Trending Titans
            </Typography>

            <div className={classes.titans}>
                <Grid container spacing={1}>
                    {TITANS.map(titan => (
                        <Grid xs={2} item>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                            <Typography variant="h6" noWrap className={classes.name}>
                                {titan}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className={classes.nextIcon}>
                <IconButton className={classes.button}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </Card>
    );
};

export default TrendingTitans;
import React from 'react';
import {Card, Grid, IconButton, makeStyles} from "@material-ui/core";
import {IActivity, NEWS, OTHER} from "../../models/Activity";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ACTIVITY: IActivity[] = [
    {type: OTHER, imgSrc: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ....', title: 'Apple presents Q3 Earnings Report', date: '12.11.2019'},
    {type: OTHER, imgSrc: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ....', title: 'Neew alerts for Tesla', date: '23.11.2019'},
    {type: NEWS, imgSrc: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .....', title: 'Testla News Article', date: '27.12.2019'},
    {type: NEWS, imgSrc: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .....', title: 'Stock market live updates', date: '28.11.2019'},
    {type: NEWS, imgSrc: '', text: '', title: '', date: ''},
    {type: OTHER, imgSrc: '', text: '', title: '', date: ''},
    {type: OTHER, imgSrc: '', text: '', title: '', date: ''},
    {type: NEWS, imgSrc: '', text: '', title: '', date: ''},
    {type: NEWS, imgSrc: '', text: '', title: '', date: ''}
    ];

const useStyles = makeStyles({
    big_card: {
        height: '100px',
        display: 'flex',
    },
    small_card: {
        height: '50px',
            display: 'flex',
    },
    nextIcon: {
        display: 'inline-block'
    },
    button: {
        width: '10px',
        color: "rgb(0 114 239 / 1)",
    },
    content: {
        display: 'inline-block',
        width: '95%'
    },
    image: {
        display: 'inline-block',
        width: '100px'
    },
    icon: {
        display: 'inline-block',
        width: '50px'
    },
    data: {
        width: 'calc(100% - 100px)',
        display: 'inline-block'
    },
    title: {
        fontSize: '0.8rem'
    },
    text: {
        fontSize: '0.8rem'
    },
});

interface ActivityCardProps {

}

const ActivityCard: React.FC<ActivityCardProps> = props => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} direction={"column"}>
            {ACTIVITY.map(data => (
                <Grid item xs={12}>
                    <Card className={data.type === NEWS ? classes.big_card : classes.small_card}>
                        <div  className={classes.content}>
                            <div className={data.type === NEWS ? classes.image : classes.icon}>
                                <img className={classes.image} src="/static/images/avatar/1.jpg" />
                            </div>
                            <div className={classes.data}>
                                <p className={classes.title}><b>{data.title}</b></p>
                                {data.type === NEWS && (<p className={classes.text}>{data.text}</p>)}
                            </div>
                        </div>

                        <div className={classes.nextIcon}>
                            <IconButton className={classes.button}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </div>
                    </Card>
                </Grid>
            ))}

        </Grid>
    );
};

export default ActivityCard;
import React from 'react';
import {Card, CardContent, Grid, makeStyles} from "@material-ui/core";
import {IBuysCard} from "../../models/BuysCard";
import AppleIcon from '@material-ui/icons/Apple';

const BUYS_CARD: IBuysCard[] = [
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
    {price: '120,83', currency: 'USD', percent: '+1.80%', title: 'AAPL:US', subTitle: 'Apple Inc', type: 'new'},
];


const useStyles = makeStyles({
    icon: {
        fontSize: '3.5rem'
    },
    price: {
        fontSize: '1.5rem',
        margin: '0',
        display: 'inline-block',
    },
    currency: {
        fontSize: '0.5rem',
        display: 'inline-block',
    },
    percent: {
        fontSize: '0.8rem',
        display: 'inline-block',
        color: '#5ae180',
    },
    nameText: {
        fontSize: '0.6rem',
        margin: 0,
        color: '#cfcfcf'
    },
    title: {
        fontSize: '0.8rem',
        margin: 0
    },
    subTitle: {
        fontSize: '0.7rem',
        margin: '0 0 15px 0',
    },
    bottomText: {
        fontSize: '0.5rem',
        margin: 0,
        color: '#cfcfcf'
    },
    price_percent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

interface StrongBuysCardProps {

}

const StrongBuysCard: React.FC<StrongBuysCardProps> = props => {
    const classes = useStyles();
    return (<Grid container spacing={2}>

            {BUYS_CARD.map(data => (
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <div>
                                <AppleIcon className={classes.icon}/>
                            </div>

                            <div className={classes.price_percent}>
                                <div>
                                    <p className={classes.price}><b>{data.price}</b></p>
                                    <p className={classes.currency}>{data.currency}</p>
                                </div>
                                <p className={classes.percent}><b>{data.percent}</b></p>
                            </div>

                            <p className={classes.nameText}>Product name:</p>
                            <p className={classes.title}><b>{data.title}</b></p>
                            <p className={classes.subTitle}><b>{data.subTitle}</b></p>

                            <p className={classes.bottomText}><b>Some text on the bottom</b></p>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default StrongBuysCard;
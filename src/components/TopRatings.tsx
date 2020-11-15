import React from 'react';
import {Card, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@material-ui/core";
import {IStock} from "../models/Stock";
import {IAnalyst} from "../models/Analyst";

const useStyles = makeStyles({
    card: {
        height: 330,
        padding: 5,
    },
    table: {
        "& td": {
            padding: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
    type: {
        width: 30,
        color: 'rgb(0 114 239 / 1)',
    },
    name: {
        width: 30,
        color: '#cfcfcf',
    },
    rank: {
        width: 30,
        color: '#5ae180',
    },
    rating: {
        width: 30,
        color: '#5ae180',
    },
    waiting: {
        width: 30,
        color: '#5ae180',
    },
    viewAll: {
        color: '#cfcfcf',
        textAlign: 'center',
        fontSize: 13,
    },
});

const ANALYST: IAnalyst[] = [
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
    {type: 'KIM', name: 'Some name 1', rank: '4.98', rating: '4.50', waiting: '5.00'},
];

interface TopRatingsProps {

}

const TopRatings: React.FC<TopRatingsProps> = props => {
    const classes = useStyles();
    return (<Card className={classes.card}>
            <Typography variant="h6" noWrap>
                Top AggregateAnalyst Ratings
            </Typography>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {ANALYST.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.type}><b>{row.type}</b></TableCell>
                                <TableCell className={classes.name}>{row.name}</TableCell>
                                <TableCell className={classes.rank}><b>{row.rank}</b></TableCell>
                                <TableCell className={classes.rating}><b>{row.rating}</b></TableCell>
                                <TableCell className={classes.waiting}><b>{row.waiting}</b></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <p className={classes.viewAll}>VIEW ALL TOP MOVERS</p>
        </Card>
    );
};

export default TopRatings;
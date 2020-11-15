import React from 'react';
import {
    Card,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@material-ui/core";
import {IStock} from "../models/Stock";

const ROWS: IStock[] = [
    {type: 'GFV', name: 'Some name 1', percent: '100', price: '19'},
    {type: 'SDX', name: 'Some name 2', percent: '90', price: '60'},
    {type: 'HRF', name: 'Some name 3', percent: '24.65', price: '45'},
    {type: 'GDF', name: 'Some name 4', percent: '32.1', price: '91'},
    {type: 'HGG', name: 'Some name 5', percent: '32.4', price: '13'},
];

const useStyles = makeStyles({
    card: {
        height: 210,
        padding: 5
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
        width: 20,
        color: 'rgb(0 114 239 / 1)'
    },
    name: {
        width: 40,
        color: '#cfcfcf'
    },
    price: {
        width: 20,

    },
    percent: {
        width: 30,
        color: '#5ae180'
    },
    percentLine: {
        width: 60,
        '& div': {
            display: 'inline-block',
            backgroundColor: '#5ae180',
            height: 21,
            borderRadius: 4
        }
    },
    viewAll: {
        color: '#cfcfcf',
        textAlign: 'center',
        fontSize: 13,
    },
});

interface TopStocksProps {

}

const TopStocks: React.FC<TopStocksProps> = props => {
    const classes = useStyles();
    return (<Card className={classes.card}>
            <Typography variant="h6" noWrap>
                Top 5 Stocks Today
            </Typography>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {ROWS.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.type}><b>{row.type}</b></TableCell>
                                <TableCell className={classes.name}>{row.name}</TableCell>
                                <TableCell className={classes.price}><b>{row.price}</b></TableCell>
                                <TableCell className={classes.percent}><b>{row.percent}%</b></TableCell>
                                <TableCell className={classes.percentLine}>
                                    <div style={{width: row.percent + '%'}}></div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <p className={classes.viewAll}>VIEW ALL TOP MOVERS</p>
        </Card>
    );
};

export default TopStocks;
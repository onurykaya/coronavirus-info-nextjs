import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const CasesInfo = ({data}) => {

    const classes = useStyles()
    console.log(data)

    return (
        <Container maxWidth="md">
        <TableContainer stickyHeader={true} component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Coronavirus Actual World Data</StyledTableCell>
                        <StyledTableCell align="right">Cases</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Active Cases</StyledTableCell>
                        <StyledTableCell align="right">Today Cases</StyledTableCell>
                        <StyledTableCell align="right">Today Deaths</StyledTableCell>
                        <StyledTableCell align="right">Total Cases/Deaths Rate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <img style={{height: '20px', weight:'20'}} src={row.countryInfo.flag}/> {row.country}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.cases}</StyledTableCell>
                            <StyledTableCell align="right">{row.deaths}</StyledTableCell>
                            <StyledTableCell align="right">{row.recovered}</StyledTableCell>
                            <StyledTableCell align="right">{row.active}</StyledTableCell>
                            <StyledTableCell align="right">{row.todayCases}</StyledTableCell>
                            <StyledTableCell align="right">{row.todayDeaths}</StyledTableCell>
                            <StyledTableCell align="right">%{((row.deaths / row.cases)*100).toFixed(2) }</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    );
}

export default CasesInfo;
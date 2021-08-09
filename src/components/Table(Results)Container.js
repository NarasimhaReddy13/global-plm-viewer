import {Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableCell} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Scrollbars} from 'react-custom-scrollbars';
import Loader from 'react-loader-spinner';
  
  const useStyles = makeStyles((theme) => ({
    table: {
       minWidth: 700,
      }
  }));

export default function SearchResultsTable(props){
  const {rows, results, documentNum} = props

    const classes = useStyles();

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          padding: 6,
          fontSize: 13,
        },
        body: {
          fontSize: 12,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

    return(
        <TableContainer component= {Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{paddingLeft:'16px'}}> Doc Number/ID</StyledTableCell>
                        <StyledTableCell align="left"> Description</StyledTableCell>
                        <StyledTableCell align="right"> Type</StyledTableCell>
                        <StyledTableCell align="center">Rev.</StyledTableCell>
                        <StyledTableCell align="center">Owner</StyledTableCell>
                        <StyledTableCell align="right" style={{paddingRight: '16px'}}>Division</StyledTableCell>
                    </TableRow>
                </TableHead>
              </Table>
              
      
                {( rows.length !== 0 && results===true && documentNum !== '') ?
                <>
                <Loader type="Audio" color="#00BFFF" height={40} width={40} timeout={800} />
                <Scrollbars style={{width: '100%', height: 330 }}>
                  <Table className={classes.table} aria-label="customized table">
                  <TableBody>
                      {rows.map((row) => (
                      <StyledTableRow key={row.objectID}>
                      <StyledTableCell scope="row"> {row.objectID} </StyledTableCell>
                      <StyledTableCell align="left" style={{width: '35%'}}>{row.objectDescription}</StyledTableCell>
                      <StyledTableCell align="right">{row.objectType}</StyledTableCell>
                      <StyledTableCell align="right">{row.objectRev}</StyledTableCell>
                      <StyledTableCell align="right">{row.objectOwner}</StyledTableCell>
                      <StyledTableCell align="right">{row.objectVault}</StyledTableCell>
                      </StyledTableRow>
                      ))}
                  </TableBody></Table></Scrollbars> </>:
                <h5 style={{textAlign: 'center', padding: 0}}> No results found for search criteria entered </h5> }
            </TableContainer>
    )
}
// import {
//   Grid,
//   Card,
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   Paper,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   tableHead: {
//     backgroundColor: "#9bc4cc",
//   },
//   tableCell: {
//     border: "solid",
//     borderWidth: "1px",
//   },
// });

// function SearchResults() {
//   const classes = useStyles();
//   return (
//     <Grid style={{ marginLeft: "5px" }}>
//       <Card>
//         <Typography
//           style={{ backgroundColor: "#9bc4cc" }}
//           size="small"
//           variant="h6"
//           hei
//         >
//           Search Results
//         </Typography>
//         <TableContainer
//           style={{
//             overflowX: "scroll",
//             borderStyle: "solid",
//             borderWidth: "1px",
//           }}
//           component={Paper}
//         >
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead className={classes.tableHead}>
//               <TableRow>
//                 <TableCell> Doc Number/ID</TableCell>
//                 <TableCell>Description</TableCell>
//                 <TableCell>Sub-Type</TableCell>
//                 <TableCell>Rev.</TableCell>
//                 <TableCell>Owner</TableCell>
//                 <TableCell>Division</TableCell>
//               </TableRow>
//             </TableHead>
//           </Table>
//         </TableContainer>
//       </Card>
//     </Grid>
//   );
// }

// export default SearchResults;

import "./index.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "#9bc4cc",
  },
  tableCell: {
    border: "solid",
    borderWidth: "1px",
  },
});

function SearchResults({ rows }) {
  function hideTable() {
    setClose(!close);
  }

  const classes = useStyles();
  const [close, setClose] = useState({ close: true });

  return (
    <Grid>
      <div className="search-results-heading-section">
        <h4 className="search-results-heading">Search Results:</h4>
        <button onClick={hideTable} className="close" type="button">
          {close && <CancelIcon color="primary" fontSize="small" />}
          {!close && <KeyboardArrowDownIcon color="primary" fontSize="small" />}
        </button>
      </div>
      {close && (
        <TableContainer
          style={{
            overflowX: "scroll",
            borderStyle: "solid",
            borderWidth: "1px",
            minHeight: "90px",
            maxHeight: "50vh",
          }}
          component={Paper}
        >
          <Table border="1" className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "2px" }}
                >
                  {" "}
                  Doc Number/ID
                </TableCell>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "2px" }}
                >
                  Description
                </TableCell>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "2px" }}
                >
                  Sub-Type
                </TableCell>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "2px" }}
                >
                  Rev.
                </TableCell>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "2px" }}
                >
                  Owner
                </TableCell>
                <TableCell
                  align="center"
                  style={{ height: "15px", padding: "0" }}
                >
                  Division
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowY: "scroll" }}>
              {rows.map((row) => (
                <TableRow key={row.objectID}>
                  <TableCell component="th" scope="row">
                    {row.objectID}
                  </TableCell>
                  <TableCell align="left">{row.objectDescription}</TableCell>
                  <TableCell align="left">{row.objectType}</TableCell>
                  <TableCell align="left">{row.objectRev}</TableCell>
                  <TableCell align="left">{row.objectOwner}</TableCell>
                  <TableCell align="left">{row.objectVault}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}

export default SearchResults;

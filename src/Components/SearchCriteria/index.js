// import {
//   Grid,
//   Card,
//   Container,
//   Typography,
//   FormControl,
//   TextField,
//   FormHelperText,
//   NativeSelect,
//   Checkbox,
// } from "@material-ui/core";

// const StyleObject = {
//   formControl: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
// };

// function SearchCriteria() {
//   return (
//     <Grid>
//       <Card style={{ marginTop: "5px", marginLeft: "5px" }}>
//         <Typography
//           style={{ backgroundColor: "#9bc4cc" }}
//           size="small"
//           variant="h6"
//         >
//           Search Criteria
//         </Typography>
//         <Container style={StyleObject.formControl}>
//           <Container>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%", height: "20px" }}>
//                 Doc Number/ID:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//               ></TextField>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Type:{" "}
//               </FormHelperText>
//               <NativeSelect
//                 style={{ width: "60%" }}
//                 value="Type"
//                 variant="outlined"
//               >
//                 <option aria-label="None" value="">
//                   ALL
//                 </option>
//               </NativeSelect>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Sub-type:{" "}
//               </FormHelperText>
//               <NativeSelect
//                 style={{ width: "60%" }}
//                 value="Sub-type"
//                 variant="outlined"
//               >
//                 <option aria-label="None" value="">
//                   ALL
//                 </option>
//               </NativeSelect>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Owner:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//               ></TextField>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Include Secured:{" "}
//               </FormHelperText>
//               <Checkbox />
//             </FormControl>
//           </Container>
//           <Container>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Description:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//               ></TextField>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Division:{" "}
//               </FormHelperText>
//               <NativeSelect
//                 style={{ width: "60%" }}
//                 value="Type"
//                 variant="outlined"
//               >
//                 <option aria-label="None" value="">
//                   ALL Divisions Selected
//                 </option>
//               </NativeSelect>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Keyword Field:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//               ></TextField>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Results Limited to:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//                 value="100"
//               ></TextField>
//             </FormControl>
//             <FormControl style={StyleObject.formControl}>
//               <FormHelperText style={{ width: "30%" }} size="small">
//                 Location:{" "}
//               </FormHelperText>
//               <TextField
//                 style={{ padding: "3px", width: "60%" }}
//                 variant="outlined"
//                 size="small"
//               ></TextField>
//             </FormControl>
//           </Container>
//         </Container>
//       </Card>
//     </Grid>
//   );
// }

// export default SearchCriteria;

import { Component } from "react";
import "./index.css";
import { Grid } from "@material-ui/core";
import SearchResults from "../SearchResults";
import rowData from "/home/theia/global-plm-app/global-plm-viewer/src/data.json";
import axios from "axios";

const emptyData = [
  {
    objectType: "",
    objectName: "",
    objectDescription: "No Documents found for Search Criteria Entered",
    objectRev: "",
    objectOwner: "",
    objectID: "",
    objectState: "",
    objectVault: "",
    objectReleaseDate: "",
  },
];

class SearchCriteria extends Component {
  state = {
    docId: "",
    type: "",
    subType: "ALL",
    owner: "",
    includeSecured: false,
    description: "",
    division: "ALL Divisions Selected",
    keywordField: "",
    resultsLimitedTo: "100",
    location: "",
    rows: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:9097/pdmvwr/documents")
      .then((response) => {
        this.setState({ rows: [response.data] });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ rows: rowData });
      });
  }

  search = (e) => {
    e.preventDefault();
    const { docId, description, subType, owner, division } = this.state;
    this.setState({
      rows: rowData.filter(
        (row) =>
          (row.objectID === docId || docId === "") &&
          (row.objectDescription
            .toLowerCase()
            .includes(description.toLowerCase()) ||
            description === "") &&
          (row.objectType.includes(subType) || subType === "ALL") &&
          (row.objectOwner.toLowerCase().includes(owner.toLowerCase()) ||
            owner === "") &&
          (row.objectVault.includes(division) ||
            division === "ALL Divisions Selected")
      ),
    });
  };

  resetValues = () => {
    this.setState({
      docId: "",
      type: "",
      subType: "ALL",
      owner: "",
      includeSecured: false,
      description: "",
      division: "ALL Divisions Selected",
      keywordField: "",
      resultsLimitedTo: "100",
      location: "",
      rows: [],
    });
  };

  render() {
    const {
      docId,
      type,
      subType,
      owner,
      includeSecured,
      description,
      division,
      keywordField,
      resultsLimitedTo,
      location,
      rows,
    } = this.state;

    return (
      <Grid>
        <form className="search-criteria">
          <div className="search-criteria-heading-section">
            <h4 className="search-criteria-heading">Search Criteria</h4>
            <div className="search-criteria-search-bar">
              <button
                onClick={this.search}
                className="search-criteria-button"
                type="submit"
              >
                Search
              </button>
              <span>|</span>
              <button
                className="search-criteria-button"
                onClick={this.resetValues}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="search-criteria-section">
            <div className="search-criteria-section-grow">
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="docNum">
                  Doc Number/ID:
                </label>
                <input
                  value={docId}
                  onChange={(e) => {
                    this.setState({ docId: e.target.value });
                  }}
                  className="input-width"
                  id="docNum"
                  type="text"
                />
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="type">
                  Type:
                </label>
                <select
                  value={type}
                  onChange={(e) => {
                    this.setState({ type: e.target.value });
                  }}
                  className="input-width"
                  id="type"
                >
                  <option defaultValue="ALL">ALL</option>
                </select>
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="subType">
                  Sub-type:
                </label>
                <select
                  value={subType}
                  onChange={(e) => {
                    this.setState({ subType: e.target.value });
                  }}
                  className="input-width"
                  id="subType"
                >
                  <option defaultValue="ALL">ALL</option>
                  <option value="Software">Software</option>
                  <option value="Procedure">Procedure</option>
                  <option value="Regulatory">Regulatory</option>
                  <option value="Generic Specification">
                    Generic Specification
                  </option>
                  <option value="Form">Form</option>
                </select>
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="owner">
                  Owner:
                </label>
                <input
                  value={owner}
                  onChange={(e) => {
                    this.setState({ owner: e.target.value });
                  }}
                  className="input-width"
                  id="owner"
                  type="text"
                />
              </div>
              <div className="search-criteria-row-checkbox">
                <label className="label-width" htmlFor="secure">
                  Include Secured:
                </label>
                <div className="input-width">
                  <input
                    value={includeSecured}
                    onChange={(e) => {
                      this.setState((prevState) => ({
                        includeSecured: !prevState.includeSecured,
                      }));
                    }}
                    className="search-criteria-checkbox"
                    id="secure"
                    type="checkbox"
                    checked={includeSecured ? true : false}
                  />
                </div>
              </div>
            </div>
            <div className="search-criteria-section-grow">
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="description">
                  Description:
                </label>
                <input
                  value={description}
                  onChange={(e) => {
                    this.setState({
                      description: e.target.value,
                    });
                  }}
                  className="input-width"
                  id="description"
                  type="text"
                />
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="division">
                  Division:
                </label>
                <select
                  value={division}
                  onChange={(e) => {
                    this.setState({
                      division: e.target.value,
                    });
                  }}
                  className="input-width"
                  id="division"
                >
                  <option defaultValue="ALL Divisions Selected">
                    ALL Divisions Selected
                  </option>
                  <option value="Transportation Safety Division">
                    Transportation Safety Division
                  </option>
                  <option value="Health Care Business Sponsor">
                    Health Care Business Sponsor
                  </option>
                  <option value="Abrasive Systems Division">
                    Abrasive Systems Division
                  </option>
                </select>
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="keyword">
                  Keyword Field:
                </label>
                <input
                  value={keywordField}
                  onChange={(e) => {
                    this.setState({
                      keywordField: e.target.value,
                    });
                  }}
                  className="input-width"
                  id="keyword"
                  type="text"
                />
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="limit">
                  Results Limited to:
                </label>
                <input
                  className="input-width"
                  value={resultsLimitedTo}
                  onChange={(e) => {
                    this.setState({
                      resultsLimitedTo: e.target.value,
                    });
                  }}
                  id="limit"
                  type="text"
                />
              </div>
              <div className="search-criteria-row">
                <label className="label-width" htmlFor="location">
                  Location:
                </label>
                <input
                  value={location}
                  onChange={(e) => {
                    this.setState({
                      location: e.target.value,
                    });
                  }}
                  className="input-width"
                  id="location"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
        <SearchResults rows={rows.length !== 0 ? rows : emptyData} />
      </Grid>
    );
  }
}

export default SearchCriteria;

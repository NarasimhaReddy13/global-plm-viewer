import { Component } from "react";
import Navbar from "./Components/Navbar";
import { Link } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bg">
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "30%",
            alignSelf: "center",
            marginTop: "10px",
            fontSize: "10px",
          }}
        >
          <Link href="#">Copyright</Link>
          <span>|</span>
          <Link href="#">3M Internal Use Only</Link>
          <span>|</span>
          <span>PDMVWR_v01_02_01_05</span>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import { connect } from "react-redux";
import Header from "./header/header";
import Footer from "./footer/footer";
import Counter from "./counter/counter";
import "./_app.scss";

function App() {
  return (
    <>
      <React.Fragment>
        <Header />
        <hr></hr>
        <Counter />
        <hr></hr>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;

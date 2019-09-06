import React from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Counter from "./components/counter/counter";
import "./app.scss";

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

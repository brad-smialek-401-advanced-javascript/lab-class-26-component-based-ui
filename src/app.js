import React from "react";
import { connect } from "react-redux";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Counter from "./components/counter/counter";

function App() {
  return (
    <>
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;

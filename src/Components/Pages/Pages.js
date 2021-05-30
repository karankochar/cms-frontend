import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPages } from "../../Redux/PageAction";

function Pages({ history, pageData, fetchPages }) {

  useEffect(() => {
    if (sessionStorage.getItem("username") === null) {
      history.push("/");
    }
    fetchPages();
  }, []);
  return(
      <h1>Hello</h1>
  )
}

const mapStateToProps = (state) => {
  //  alert("map state: " + JSON.stringify(state.students));
  return {
    pageData: state.pages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPages: () => dispatch(fetchPages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);

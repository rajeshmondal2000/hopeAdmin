import React from "react";
import { connect } from "react-redux";
import Login from "../pages/Login";
import AppRoutes from "./AppRoutes";

const RootNavigation = ({ auth }) => {
  if (auth.user) {
    return <AppRoutes />;
  } else {
    return <Login />;
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);

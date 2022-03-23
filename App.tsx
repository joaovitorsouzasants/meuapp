import { StatusBar } from "expo-status-bar";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import { Home } from "./src/screens/Home";
export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="ligth-content" />
      <Home />
    </Fragment>
  );
}

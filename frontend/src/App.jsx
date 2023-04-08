import React, { useState, useEffect, Switch } from "react";
import rootRoutes from "./Components/rootRoutes";
import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";

import noMatch from "./Components/noMatch";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <NotificationContainer /> */}
        <Switch>
          <Route path="/admin" component={rootRoutes} />
          <Route component={noMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

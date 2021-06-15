import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home/Home";
import Order from "./Component/Order/Order";
import Admin from "./Component/Admin/Admin";
import Login from "./Component/Login/Login";
import AddBooks from "./Component/AddBooks/AddBooks";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import CheckOut from "./Component/CheckOut/CheckOut";
import BookManager from "./Component/BookManager/BookManager";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home"> <Home /> </Route>
          <PrivateRoute path="/order"> <Order /> </PrivateRoute>
          <PrivateRoute path="/admin"> <Admin /> </PrivateRoute>
          <PrivateRoute path="/addBooks"> <AddBooks /> </PrivateRoute>
          <PrivateRoute path="/bookManager"> <BookManager /> </PrivateRoute>
          <PrivateRoute path="/checkOut/:bookId"> <CheckOut /> </PrivateRoute>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/login"> <Login /> </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventroy from "./components/Inventroy/Inventroy";
import Login from "./components/Login/Login";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import OrderReview from "./components/OrderReview/OrderReview";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/inventory">
            <Inventroy></Inventroy>
          </Route>
          <Route exact path="/order-place">
            <OrderPlaced></OrderPlaced>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

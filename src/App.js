import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlaceHolder from "./pages/PlaceHolder";

function App() {
  return (
    <Switch>
      <Route exact component={PlaceHolder} path="/" />
      <Route exact component={Home} path="/home" />
    </Switch>
  );
}

export default App;

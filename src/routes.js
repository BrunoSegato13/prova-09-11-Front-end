import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CreateForm from "./pages/createForm/createForm";
import UpdateForm from "./pages/updateForm/updateForm";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/create" exact component={CreateForm} />
      <Route path="/update/:id" exact component={UpdateForm} />
    </Switch>
  </BrowserRouter>
);

export default routes;

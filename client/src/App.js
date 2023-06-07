import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "../src/components/Home/Home";
import CreateRecipe from "../src/components/CreateRecipe/CreateRecipe";
import RecipeDetail from "../src/components/RecipeDetail/RecipeDetail";
import LandingPage from "../src/components/landingPage";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = 'https://the-flavor-compass-production.up.railway.app'

const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/recipes/create" component={CreateRecipe}></Route>
        <Route path="/recipes/:id" component={RecipeDetail}></Route>
      </Switch>
  </div>
);

export default App;

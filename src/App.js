import React, { Component } from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import {createBrowserHistory } from "history";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    const history = createBrowserHistory();
    //exact == this attribute is use for exact path then vies component
    return (
      <div>
        <NavBar />
        <div className="content">
        <Switch>
          {/* <Route path="/products" component={Products}/> */}
           <Route path="/products/:id" render={(props)=> <ProductDetails sortBy="new" {...props} />}/>
          <Route path="/products" render={(props)=> <Products sortBy="new" {...props} />}/>

         {/* for ?(quesation mart )is used for if any params is nor found in url then  */}

          <Route path="/posts/:year?/:month?" component={Posts}/>
          <Route path="/admin" component={Dashboard}/>
          <Route path="/not-found" component={NotFound}/>
          <Route exact path="/" >
            { history.push('/admin')}
          </Route>

          {/* if match the from="" "name" then it Redirect to="" "/admin" */}
          <Redirect from="/name" to="/admin"/>
          {/* if any path not match the create a path in Redirect to and go not found page */}
          <Redirect to="/not-found"/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;

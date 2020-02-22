import React from 'react';
import './App.css';
import Layout from "./Component/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import News from "./Component/News/News";
import FormNews from "./Component/FormNews/FormNews";
import NewsId from "./Component/NewsId/NewsId";

function App() {
  return (
    <div className="App">
        <Layout>
          <Switch>
              <Route exact path="/" component={News}/>
              <Route exact path="/addNews" component={FormNews}/>
              <Route exact path="/news/:id" component={NewsId}/>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Views from './viewModel.js'
import GoodsDetail from './goodsdetail.js'
import carts from './carts.js'
import Classify from './classify.js'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Views}/>
            <Route exact path="/goodsdetail" component={GoodsDetail}/>
            <Route exact path="/carts" component={carts}/>
            <Route exact path="/classify" component={Classify}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
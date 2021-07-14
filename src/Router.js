import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Views from './viewModel.js'
import GoodsDetail from './goodsdetail.js'
import carts from './carts.js'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Views}/>
            <Route exact path="/goodsdetail" component={GoodsDetail}/>
            <Route exact path="/carts" component={carts}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
import React from "react";
import {Switch, Route} from "react-router-dom"
import GlobalFeed from "../GlobalFeed";
import Article from "../Articles";

export default () => {
    return (
        <Switch>
            <Route path={"/"} component={GlobalFeed} exact/>
            <Route path={"/article:slug"} component={Article} />
        </Switch>
    )
}

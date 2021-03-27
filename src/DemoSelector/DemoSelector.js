import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import NoMatch from "../NoMatch/NoMatch";

function DemoSelector({content, match}) {
    return (
        <Switch>
            {content.map(({href}) => <Route key={href} path={`${match.path}/${href}`}>
                <div>Здесь будет страница: {`${match.path}/${href}`}</div>
            </Route>)}
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    );
}

export default withRouter(DemoSelector);
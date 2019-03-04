import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {Route,Switch,HashRouter} from 'react-router-dom'

import "./index.css"
import reducers from './redux/reducer'
import Login from './container/login/login'
import Home from './container/home/home'


const store = createStore(reducers,compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension() : f => f
))
ReactDom.render(
    (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/(home|myservice|setting|detail)/" component={Home}></Route>
                        <Route path="/" component={Login}></Route>
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    ),
    document.getElementById('root')
)
